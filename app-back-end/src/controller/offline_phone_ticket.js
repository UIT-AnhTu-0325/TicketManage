const { populate } = require("../models/offline_phone_ticket");
const OfflinePhoneTicket = require("../models/offline_phone_ticket");

exports.getAll = async (req, res) => {
  try {
    const offlinePhoneTickets = await OfflinePhoneTicket.find()
      .populate("idTicket")
      .populate({
        path: "idTicket",
        populate: [{ path: "idTrip", populate: "idRoute" }],
      });
    res.status(200).json(offlinePhoneTickets);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const offlinePhoneTicket = await OfflinePhoneTicket.findById(req.params.id);
    res.status(200).json(offlinePhoneTicket);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.create = async (req, res) => {
  const newOfflinePhoneTicket = new OfflinePhoneTicket(req.body);

  try {
    const saved = await newOfflinePhoneTicket.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await OfflinePhoneTicket.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteById = async (req, res) => {
  try {
    await OfflinePhoneTicket.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
