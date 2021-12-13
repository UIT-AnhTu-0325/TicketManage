const mongoose = require("mongoose");

const OfflinePhoneTicketSchema = new mongoose.Schema(
  {
    idTicket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    idUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    idAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //Infor
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    //Ticket
    seatNumber: {
      type: String,
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

module.exports = mongoose.model("OfflinePhoneTicket", OfflinePhoneTicketSchema);
