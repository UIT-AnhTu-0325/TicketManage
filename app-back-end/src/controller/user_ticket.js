const User_Ticket = require("../models/user_ticket");
const Trip = require("../models/trip");
const Vehicle = require("../models/vehicle");
const Route = require("../models/route");
const Enterprise = require("../models/enterprise");
const Ticket = require("../models/ticket")

exports.getAll = async (req, res) => {
    try {
        const user_tickets = await User_Ticket.find();
        let payload = [];

        const trips = await Trip.find();
        const vehicles = await Vehicle.find();
        const routes = await Route.find();
        const enterprise = await Enterprise.find();  
        const tickets = await Ticket.find();

        trips.map((trip) => {
            let result = {};
            result.trip = trip;
            vehicles.filter((item) => trip.idVehicle.equals(item._id)).map((item) => result.vehicle = item);
            routes.filter((item) => trip.idRoute.equals(item._id)).map((item) => result.route = item);
            enterprise.filter((item) => result.route.idEnterprise.equals(item._id)).map((item) => result.enterprise = item);
            tickets.filter((item) => item.idTrip.equals(trip._id)).map((item) =>{
                result.ticket = item;
                user_tickets.forEach((element) => {
                    if(element.idTicket.equals(item._id)){
                        let data ={};
                        data.trip = result.trip;
                        data.vehicle = result.vehicle;
                        data.route = result.route;
                        data.enterprise = result.enterprise;
                        data.ticket = result.ticket;
                        data.book = element;
                        payload.push(data);
                    }
                }) 
            });
        })
        res.status(200).json(payload);
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