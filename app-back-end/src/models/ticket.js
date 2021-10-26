const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    idTrip : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    quantity : {
        type : Number,
        required: true
    },
    type : {
        type : Number,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model("Ticket", TicketSchema);