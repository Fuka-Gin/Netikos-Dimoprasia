const mongoose = require("mongoose");

const AutomobileSchema = new mongoose.Schema({
    itemId: { type: String },
    vehicleType: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    ownershipType: { type: String, required: true },
    accidentHistory: { type: String, required: true },
    bidPrice: { type: Number, required: true },
    reservePrice: { type: Number, required: true },
    auctionDate: { type: Date, required: true },
    auctionTime: { type: String, required: true },
    bidIncrementVal: { type: Number, required: true },
    fuelType: { type: String, required: false },
    transmission: { type: String, required: false },
    features: { type: [String], required: false }, // Array of selected features
    paymentMode: { type: [String], required: true }, // Array of selected payment modes
    deposit: { type: Number, required: true },
    possession_timeline: { type: String, required: true },
    images: { type: [String], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who added the item
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Automobile", AutomobileSchema);