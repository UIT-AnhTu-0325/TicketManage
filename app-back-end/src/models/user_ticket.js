const mongoose = require("mongoose");

const USER_TICKETSchema = new mongoose.Schema(
  {
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    idTicket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    seatNumber: {
      type: Number,
      required: true,
    },
    getOn: {
      type: String,
      required: true,
    },
    getOff: {
      type: String,
      required: true,
    },
    canceled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("USER_TICKET", USER_TICKETSchema);
