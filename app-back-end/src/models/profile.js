const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        account: {
            ref: "users",
            type: Schema.Types.ObjectId,
        },
        avatar: {
            type: String,
            required: false,
        },
        dob: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: false,
            enum: ["Male", "Female"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);