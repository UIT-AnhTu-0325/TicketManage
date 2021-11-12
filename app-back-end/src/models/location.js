const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
    {
        idCity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'City',
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {  
        timestamps: true
    }
);

module.exports = mongoose.model("Location", LocationSchema);