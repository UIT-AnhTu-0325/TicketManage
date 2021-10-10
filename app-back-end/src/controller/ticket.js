const Ticket = require("../models/ticket");

exports.getAll = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.addTicket = async (req, res) => {
    const newTicket = new Ticket(req.body);
    
    try {
        const savedTicket = await newTicket.save();
        res.status(200).json(savedTicket);
    } catch (err) {
        res.status(500).json(err);
    }
}