const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
    {
        idTicket: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
            required: true
        },
        content: {
            type: String,
            required: true
        },
        rateDrive: {
            type: Number,
            required: true
        },
        rateVehicle: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);