const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
    {       
        lisensePlate: {
            type: String,
            required: true
        },
        totalSeat: {
            type: Number,
            required: true
        },
        quality: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);