const User_Ticket = require("../models/user_ticket");

exports.getAll = async (req, res) => {
    try {
        const user_tickets = await User_Ticket.find();
        res.status(200).json(user_tickets);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const user_ticket = await User_Ticket.findById(req.params.id);
        res.status(200).json(user_ticket);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newUser_Ticket = new User_Ticket(req.body);
    
    try {
        const saved = await newUser_Ticket.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await User_Ticket.findByIdAndUpdate(
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
        await User_Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}