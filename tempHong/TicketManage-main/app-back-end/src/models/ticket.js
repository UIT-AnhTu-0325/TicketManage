const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
    idTrip : {
        type : String,
        required: true
    },
    idCustomer : {
        type : String,
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