const Trip = require("../models/trip");

exports.getAll = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.addTrip = async (req, res) => {
    const newTrip = new Trip(req.body);
    
    try {
        const savedTrip = await newTrip.save();
        res.status(200).json(savedTrip);
    } catch (err) {
        res.status(500).json(err);
    }
}