const express = require("express");
const multer = require("multer");

const User = require("../models/User");
const HouseAuction = require("../models/HouseAuction");
const AutomobileAuction = require("../models/AutomobileAuction");
const ArtAuction = require("../models/ArtAuction");
const OthersAuction = require("../models/OthersAuction");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Store temporarily before MEGA upload

router.post("/submit-form", upload.array("images", 5), async (req, res) => {
    try {
        const { formType, userId } = req.body;
        const formData = { ...req.body };

        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        formData.itemId = formData.itemId;
        formData.createdBy = user._id;

        let newEntry;
        if (formType === "house_auction") {
            newEntry = new HouseAuction(formData);
        } else if (formType === "art_auction") {
            newEntry = new ArtAuction(formData);
        } else if (formType === "automobile_auction") {
            newEntry = new AutomobileAuction(formData);
        } else {
            newEntry = new OthersAuction(formData);
        }

        await newEntry.save();
        res.status(201).json({ message: "Form submitted successfully!", form: newEntry });
    } catch (error) {
        console.error("Error submitting form:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

// Get Auction Listings by Type
router.get("/forms/:formType", async (req, res) => {
    try {
        const { formType } = req.params;
        let forms;

        if (formType === "house_auction") {
            forms = await HouseAuction.find();
        } else if (formType === "art_auction") {
            forms = await ArtAuction.find();
        } else if (formType === "automobile_auction") {
            forms = await AutoMobileAuction.find();
        } else {
            forms = await OtherAuction.find();
        }

        res.json(forms);
    } catch (error) {
        console.error("Error retrieving forms:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
