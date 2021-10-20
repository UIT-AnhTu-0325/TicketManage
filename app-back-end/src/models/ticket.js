const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    idTrip : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    idCustomer : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    seatNumber : {
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
    service : {
        type : String,
        required: true
    },
    statusTicket : {
        type : String,
        required: true
    },
    statusPrice : {
        type : String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Ticket", TicketSchema);