const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
    {
        idVehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle',
            required: true
        },
        idRoute:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Route',
            required: true
        },
        startDate: {
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