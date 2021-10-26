const mongoose = require("mongoose");

const TicketCancelSchema = new mongoose.Schema(
    {
        idTicket: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
            required: true
        },
        reason: {
            type: String,
            required: true
        },
        time: {
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

module.exports = mongoose.model("TicketCancel", TicketCancelSchema);