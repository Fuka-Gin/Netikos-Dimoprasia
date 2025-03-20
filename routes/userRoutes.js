const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config();

router.post("/signup", async (req, res) => {
    try {
        const { username, email, mobileNo, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({ username, email, mobileNo, password: hashedPassword });
        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "Signup successful", token });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        // Compare entered password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        await User.updateOne({ email }, { $set: { isActive: true } });
        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, userId: user._id, email: user.email, username: user.username });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/api/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById( userId ).select("-password"); // Exclude password from response
        if (!user) return res.status(404).json({ message: "User not found" });
 
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error); // Debugging log
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});

router.put("/api/user/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const updatedData = req.body;

        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true});
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        
        res.json({ message: "Profile updated successfully!", user });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ error: "Failed to update profile" });
    }
});

router.post("/logout", async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) return res.status(400).json({ message: "User not found" });

        // Update isActive status to false
        await User.updateOne({ _id: userId }, { $set: { isActive: false } });

        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;