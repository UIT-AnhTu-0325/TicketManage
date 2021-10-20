const mongoose = require("mongoose");

const TripLogSchema = new mongoose.Schema(
    {
        idTrip: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trip',
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        event: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("TripLog", TripLogSchema);