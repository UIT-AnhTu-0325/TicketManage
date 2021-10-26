const mongoose = require("mongoose");

const GoodsSchema = new mongoose.Schema(
    {
        idTicket: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket',
            required: true
        },
        type: {
            type: Number,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Goods", GoodsSchema);