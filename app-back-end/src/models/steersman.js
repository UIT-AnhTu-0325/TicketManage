const {PersonSchema} = require("./person.js");
const mongoose = require("mongoose");

const SteersmanSchema = new mongoose.Schema(
    {
        information: {
            type: PersonSchema,
            required: true
        },
        position: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Steersman", SteersmanSchema);