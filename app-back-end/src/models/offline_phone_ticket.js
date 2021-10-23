const mongoose = require("mongoose");

const OfflinePhoneTicketSchema = new mongoose.Schema(
    {
        idTrip: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trip',
            required: true
        },
        seatNumber: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("OfflinePhoneTicket", OfflinePhoneTicketSchema);