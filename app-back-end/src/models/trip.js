const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
    {
        idVehicle: {
            type: String,
            required: true
        },
        startLocation:{
            type: String,
            required: true
        },
        endLocation: {
            type: String,
            required: true
        },
        startDate:{
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Trip", TripSchema);