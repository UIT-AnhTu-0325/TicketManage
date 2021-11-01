const mongoose = require("mongoose");

const USER_TICKETSchema = new mongoose.Schema(
    {
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        idTicket:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
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

module.exports = mongoose.model("USER_TICKET", USER_TICKETSchema);