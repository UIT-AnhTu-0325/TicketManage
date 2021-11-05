const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    idTrip : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    quantity : {
        type : Array,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model("Ticket", TicketSchema);