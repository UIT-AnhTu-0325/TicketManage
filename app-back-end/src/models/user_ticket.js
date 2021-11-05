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
        getOn:{
            type: String,
            required: true
        },
        getOff:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("USER_TICKET", USER_TICKETSchema);