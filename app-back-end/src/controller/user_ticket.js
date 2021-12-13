const User_Ticket = require("../models/user_ticket");
const Trip = require("../models/trip");
const Vehicle = require("../models/vehicle");
const Route = require("../models/route");
const Enterprise = require("../models/enterprise");
const Ticket = require("../models/ticket");
const User = require("../models/user");



exports.getLastOrder = async (req, res) => {
    try {
        const lastOrder = await User_Ticket.aggregate(
            [
                {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        }
                    }
                }, {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'idUser',
                        'foreignField': '_id',
                        'as': 'infor'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$infor', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'infor': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'tickets',
                        'localField': 'idTicket',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$sort': {
                        'createdAt': 1
                    }
                }
            ]
        )

        let data = []

        for (let i = 0; i < lastOrder.length; i++) {
            if (lastOrder[i].canceled) {
                data.push({
                    id: i + 1,
                    user: lastOrder[i].username,
                    email: lastOrder[i].email,
                    contact: lastOrder[i].contactNumber,
                    price: lastOrder[i].price,
                    status: "refund",
                })
            }
            if (!lastOrder[i].canceled) {
                data.push({
                    id: i + 1,
                    user: lastOrder[i].username,
                    email: lastOrder[i].email,
                    contact: lastOrder[i].contactNumber,
                    price: lastOrder[i].price,
                    status: "paid",
                })
            }
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getCurrentByEnterprisesList = async (req, res) => {
    try {
        const bookingByEnterprises = await User_Ticket.aggregate(
            [
                {
                    '$lookup': {
                        'from': 'tickets',
                        'localField': 'idTicket',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'trips',
                        'localField': 'idTrip',
                        'foreignField': '_id',
                        'as': 'infor'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$infor', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'infor': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'routes',
                        'localField': 'idRoute',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'enterprises',
                        'localField': 'idEnterprise',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        },
                        'canceled': false
                    }
                }, {
                    '$group': {
                        '_id': '$name',
                        'totalBooking': {
                            '$sum': 1
                        },
                        'totalSale': {
                            '$sum': '$price'
                        }
                    }
                }
            ]
        )

        if (bookingByEnterprises.length == 0) {
            const enterpriseList = await Enterprise.find();

            var data = []

            for (let i = 0; i < enterpriseList.length; i++) {
                data.push({
                    username: enterpriseList[i].name,
                    order: "0",
                    price: "0"
                })
            }
        }
        else {
            const enterpriseList = await Enterprise.find();

            var data = []
            var temp = false

            for (let i = 0; i < enterpriseList.length; i++) {
                for (let j = 0; j < bookingByEnterprises.length; j++) {
                    if (enterpriseList[i].name == bookingByEnterprises[j]._id) {
                        data.push({
                            username: enterpriseList[i].name,
                            order: bookingByEnterprises[j].totalBooking,
                            price: bookingByEnterprises[j].totalSale
                        })
                        temp = true
                    }
                }
                if (!temp) {
                    data.push({
                        username: enterpriseList[i].name,
                        order: "0",
                        price: "0"
                    })
                }
                else {
                    temp = false
                }
            }
        }

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getCurrentByEnterprises = async (req, res) => {
    try {
        const bookingByEnterprises = await User_Ticket.aggregate(
            [
                {
                    '$lookup': {
                        'from': 'tickets',
                        'localField': 'idTicket',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'trips',
                        'localField': 'idTrip',
                        'foreignField': '_id',
                        'as': 'infor'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$infor', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'infor': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'routes',
                        'localField': 'idRoute',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'enterprises',
                        'localField': 'idEnterprise',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        },
                        'canceled': false
                    }
                }, {
                    '$group': {
                        '_id': '$name',
                        'totalBooking': {
                            '$sum': 1
                        },
                        'totalSale': {
                            '$sum': '$price'
                        }
                    }
                }
            ]
        )

        if (bookingByEnterprises.length == 0) {
            const enterpriseList = await Enterprise.find();

            var booking = []
            var sale = []

            for (let i = 0; i < enterpriseList.length; i++) {
                booking.push(0)
                sale.push(0)
            }
        }
        else {
            const enterpriseList = await Enterprise.find();

            var booking = []
            var sale = []
            var temp = false

            for (let i = 0; i < enterpriseList.length; i++) {
                for (let j = 0; j < bookingByEnterprises.length; j++) {
                    if (enterpriseList[i].name == bookingByEnterprises[j]._id) {
                        booking.push(bookingByEnterprises[j].totalBooking)
                        sale.push(bookingByEnterprises[j].totalSale)
                        temp = true
                    }
                }
                if (!temp) {
                    booking.push(0)
                    sale.push(0)
                }
                else {
                    temp = false
                }
            }
        }

        res.status(200).json({ booking, sale });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getCurrentDate = async (req, res) => {
    try {

        const tripCD = await Trip.aggregate(
            [
                {
                    '$match': {
                        'startDate': new Date(new Date().setUTCHours(0, 0, 0, 0))
                    }
                }, {
                    '$group': {
                        '_id': '$startDate',
                        'count': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )

        const ticketCD = await User_Ticket.aggregate(
            [
                {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        },
                        'canceled': false
                    }
                }, {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$createdAt'
                            }
                        }
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'count': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )
        const cancelTicketCD = await User_Ticket.aggregate(
            [
                {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        },
                        'canceled': true
                    }
                }, {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$createdAt'
                            }
                        }
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'count': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )

        const salesCD = await User_Ticket.aggregate(
            [
                {
                    '$lookup': {
                        'from': 'tickets',
                        'localField': 'idTicket',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$match': {
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        },
                        'canceled': false
                    }
                }, {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$createdAt'
                            }
                        },
                        'price': '$price'
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'count': {
                            '$sum': '$price'
                        }
                    }
                }
            ]
        )
        const newUser = await User.aggregate(
            [
                {
                    '$match': {
                        'role': 'user',
                        'createdAt': {
                            '$gte': new Date(new Date().setUTCHours(0, 0, 0, 0)),
                            '$lt': new Date(new Date().setUTCHours(23, 59, 59, 999))
                        }
                    }
                }, {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$createdAt'
                            }
                        }
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'count': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )

        let data =
            [
                {
                    "icon": "bx bx-bus",
                    "count": tripCD.length == 0 ? "0" : tripCD[0].count.toString(),
                    "title": "Total trip"
                },
                {
                    "icon": "bx bx-dollar-circle",
                    "count": salesCD.length == 0 ? "0" : salesCD[0].count.toString(),
                    "title": "Total income"
                },
                {
                    "icon": "bx bx-receipt",
                    "count": ticketCD.length == 0 ? "0" : ticketCD[0].count.toString(),
                    "title": "Total booking"
                },
                {
                    "icon": "bx bx-receipt",
                    "count": cancelTicketCD.length == 0 ? "0" : cancelTicketCD[0].count.toString(),
                    "title": "Total canceled Ticket"
                },
                {
                    "icon": "bx bx-receipt",
                    "count": newUser.length == 0 ? "0" : newUser[0].count.toString(),
                    "title": "New user"
                },
            ]


        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}



exports.getTicketCanceled = async (req, res) => {
    try {
        const { month, year } = req.body
        const canceledTicket = await User_Ticket.aggregate(
            [
                {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m',
                                'date': '$createdAt'
                            }
                        },
                        'canceled': '$canceled',
                        'idTicket': '$idTicket',
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        }
                    }
                }, {
                    '$match': {
                        'month': 12,
                        'year': 2021,
                        'canceled': true
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'totalCanceledTicket': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )

        const tickets = await User_Ticket.aggregate(
            [
                {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m',
                                'date': '$createdAt'
                            }
                        },
                        'canceled': '$canceled',
                        'idTicket': '$idTicket',
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        }
                    }
                }, {
                    '$lookup': {
                        'from': 'tickets',
                        'localField': 'idTicket',
                        'foreignField': '_id',
                        'as': 'detail'
                    }
                }, {
                    '$replaceRoot': {
                        'newRoot': {
                            '$mergeObjects': [
                                {
                                    '$arrayElemAt': [
                                        '$detail', 0
                                    ]
                                }, '$$ROOT'
                            ]
                        }
                    }
                }, {
                    '$project': {
                        'detail': 0
                    }
                }, {
                    '$match': {
                        'canceled': false,
                        'month': month,
                        'year': year
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'totalTicket': {
                            '$sum': 1
                        },
                        'totalSale': {
                            '$sum': '$price'
                        }
                    }
                }, {
                    '$sort': {
                        '_id': 1
                    }
                }
            ]
        )

        if (tickets.length == 0) {
            var totalTicket = 0
        }
        else {
            var totalTicket = tickets[0].totalTicket
        }


        if (canceledTicket.length == 0) {
            var totalCanceledTicket = 0
        }
        else {
            var totalCanceledTicket = canceledTicket[0].totalCanceledTicket
        }


        res.status(200).json([totalTicket, totalCanceledTicket]);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

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
            tickets.filter((item) => item.idTrip.equals(trip._id)).map((item) => {
                result.ticket = item;
                user_tickets.forEach((element) => {
                    if (element.idTicket.equals(item._id)) {
                        let data = {};
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
        res.status(500).json({ error: err });
    }
}

exports.getById = async (req, res) => {
    try {
        const user_ticket = await User_Ticket.findById(req.params.id);
        res.status(200).json(user_ticket);
    } catch (err) {
        res.status(500).json({ error: err });
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