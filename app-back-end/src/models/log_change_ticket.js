const mongoose = require("mongoose");

const LogChangeTicketSchema = new mongoose.Schema(
    {
        idTicket: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        oldSeatNumber: {
            type: Number,
            required: true
        },
        newSeatNumber: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("LogChangeTicket", LogChangeTicketSchema);