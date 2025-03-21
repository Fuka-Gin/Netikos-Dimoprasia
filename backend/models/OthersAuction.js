const mongoose = require("mongoose");

const OthersSchema = new mongoose.Schema({
    itemId: { type: String },
    itemCategory: { type: String, required: true },
    itemName: { type: String, required: true },
    itemDescription: { type: String, required: true },
    yearMade: { type: Number, required: true },
    condition: { type: String, required: true },
    bidPrice: { type: Number, required: true },
    reservePrice: { type: Number, required: true },
    auctionDate: { type: Date, required: true },
    auctionTime: { type: String, required: true },
    bidIncrementVal: { type: Number, required: true },
    certification: { type: String, required: true },
    features: { type: [String], default: [] },
    paymentMode: { type: [String], default: [] },
    deposit: { type: Number, required: true },
    pickupTimeline: { type: String, required: true },
    shippingResponsibility: { type: String, required: true },
    images: { type: [String], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who added the item
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Others", OthersSchema);