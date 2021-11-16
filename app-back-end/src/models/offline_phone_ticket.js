const mongoose = require("mongoose");

const OfflinePhoneTicketSchema = new mongoose.Schema(
  {
    idTicket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    seatNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OfflinePhoneTicket", OfflinePhoneTicketSchema);
