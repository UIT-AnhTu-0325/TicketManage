const TicketCancel = require("../models/ticket_cancel");

exports.getAll = async (req, res) => {
    try {
        const ticketCancels = await TicketCancel.find();
        res.status(200).json(ticketCancels);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const ticketCancel = await TicketCancel.findById(req.params.id);
        res.status(200).json(ticketCancel);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newTicketCancel = new TicketCancel(req.body);
    
    try {
        const saved = await newTicketCancel.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await TicketCancel.findByIdAndUpdate(
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
}

exports.deleteById = async (req, res) => {
    try {
        await TicketCancel.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}