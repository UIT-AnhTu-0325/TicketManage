const LogChangeTicket = require("../models/log_change_ticket");

exports.getAll = async (req, res) => {
    try {
        const logChangeTickets = await LogChangeTicket.find();
        res.status(200).json(logChangeTickets);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const logChangeTicket = await LogChangeTicket.findById(req.params.id);
        res.status(200).json(logChangeTicket);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newLogChangeTicket = new LogChangeTicket(req.body);
    
    try {
        const saved = await newLogChangeTicket.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await LogChangeTicket.findByIdAndUpdate(
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
        await LogChangeTicket.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}