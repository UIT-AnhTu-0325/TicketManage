const Trip = require("../models/trip");
const Vehicle = require("../models/vehicle");
const Route = require("../models/route");
const Enterprise = require("../models/enterprise");
const Ticket = require("../models/ticket")
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

exports.fetchAll = async (req, res) => {
    try {
        let payload = [];

        const trips = await Trip.find();
        const vehicles = await Vehicle.find();
        const routes = await Route.find();
        const enterprise = await Enterprise.find();  
        const tickets = await Ticket.find();

        trips.filter((trip) => trip.startDate >= Date.now()).map((trip) => {
            let result = {};
            result.trip = trip;
            vehicles.filter((item) => trip.idVehicle.equals(item._id)).map((item) => result.vehicle = item);
            routes.filter((item) => trip.idRoute.equals(item._id)).map((item) => result.route = item);
            enterprise.filter((item) => result.route.idEnterprise.equals(item._id)).map((item) => result.enterprise = item);
            tickets.filter((item) => item.idTrip.equals(trip._id)).map((item) =>{
                result.ticket = item; 
            });
            payload.push(result);
        })
        res.status(200).json(payload);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newTrip = new Trip(req.body);
    
    try {
        const saved = await newTrip.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Trip.findByIdAndUpdate(
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
        await Trip.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}