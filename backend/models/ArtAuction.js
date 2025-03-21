const mongoose = require("mongoose");

const ArtSchema = new mongoose.Schema({
    itemId: { type: String },
    artType: { type: String, required: true },
    title: { type: String, required: true },
    artistName: { type: String, required: true },
    yearCreated: { type: Number, required: true },
    medium: { type: String, required: true },
    dimensions: { type: String, required: true },
    openingBid: { type: Number, required: true },
    reservePrice: { type: Number, required: true },
    auctionDate: { type: Date, required: true },
    auctionTime: { type: String, required: true },
    bidIncrementVal: { type: Number, required: true },
    artStyle: { type: String, required: true },
    certificateAuth: { type: String, required: true },
    images: { type: [String], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Art", ArtSchema);