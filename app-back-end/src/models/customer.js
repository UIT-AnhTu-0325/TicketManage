const {PersonSchema} = require("./person.js");
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
    {
        information: {
            type: PersonSchema,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Customer", CustomerSchema);