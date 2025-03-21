const mongoose = require("mongoose");

const houseAuctionSchema = new mongoose.Schema({
    itemId: { type: String },
    propertyType: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    landArea: { type: Number, required: true },
    builtUpArea: { type: Number, required: true },
    floorCount: { type: Number, required: true },
    roomCount: { type: Number, required: true },
    builtYear: { type: Date, required: true },
    ownershipType: { type: String, required: true },
    bidPrice: { type: Number, required: true },
    reservePrice: { type: Number, required: true },
    auctionDate: { type: Date, required: true },
    auctionTime: { type: String, required: true },
    bidIncrementVal: { type: Number, required: true },
    parkingAvailability: { type: String, required: true },
    amenities: { type: [String], required: false }, // Array of amenities
    nearbyFacility: { type: [String], required: false }, // Array of checkboxes
    paymentMode: { type: [String], required: true }, // Array of selected payment modes
    deposit: { type: Number, required: true },
    possession_timeline: { type: String, required: true },
    fees_bearer: { type: String, required: true },
    images: { type: [String], required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who added the item
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("HouseAuction", houseAuctionSchema);