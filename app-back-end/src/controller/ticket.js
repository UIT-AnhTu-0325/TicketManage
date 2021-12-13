const Ticket = require("../models/ticket");
const User_Ticket = require("../models/user_ticket");
const User = require("../models/user");



exports.getMonthByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
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
                        'canceled': true,
                        'month': month,
                        'year': year
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'totalCanceledTicket': {
                            '$sum': 1
                        },
                    }
                }, {
                    '$sort': {
                        '_id': 1
                    }
                }
            ]
        )
        const newUser = await User.aggregate(
            [
                {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m',
                                'date': '$createdAt'
                            }
                        },
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        }
                    }
                }, {
                    '$match': {
                        'month': month,
                        'year': year
                    }
                }, {
                    '$group': {
                        '_id': '$date',
                        'totalNewUser': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )

        if (tickets.length == 0) {
            var totalTicket = 0
            var totalSale = 0
        }
        else {
            var totalTicket = tickets[0].totalTicket
            var totalSale = tickets[0].totalSale
        }
        if (canceledTicket.length == 0) {
            var totalCanceledTicket = 0
        }
        else {
            var totalCanceledTicket = canceledTicket[0].totalCanceledTicket
        }
        if (newUser.length == 0) {
            var totalNewUser = 0
        }
        else {
            var totalNewUser = newUser[0].totalNewUser
        }



        res.status(200).json({
            totalTicket,
            totalSale,
            totalCanceledTicket,
            totalNewUser
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getDateByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
        const tickets = await User_Ticket.aggregate(
            [
                {
                    '$project': {
                        'date': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
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

        let listTicket = []
        let listSale = []
        var day = new Date(year, month, 0).getDate()

        console.log(tickets.length)

        if (tickets.length == day) {
            for (var i = 0; i < tickets.length; i++) {
                listTicket.push(tickets[i].totalTicket)
                listSale.push(tickets[i].totalSale)
            }
        }
        else {
            for (var i = 1, j = 0; i <= day; i++) {
                if (j == tickets.length) {
                    listTicket.push(0)
                    listSale.push(0)
                }
                else if (tickets[j]._id == ((i < 10) ? `${year}-${month}-0${i}` : `${year}-${month}-${i}`)) {
                    listTicket.push(tickets[j].totalTicket)
                    listSale.push(tickets[j].totalSale)
                    j++
                }
                else {
                    listTicket.push(0)
                    listSale.push(0)
                }
            }
        }
        res.status(200).json({ listTicket, listSale });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getAllByDay = async (req, res) => {
    try {
        const tickets = await Ticket.aggregate(
            [
                {
                    '$unwind': {
                        'path': '$quantity'
                    }
                }, {
                    '$match': {
                        'quantity': true
                    }
                }, {
                    '$project': {
                        'createdAt': '$createdAt',
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        },
                        'quantity': '$quantity',
                        'price': '$price'
                    }
                }, {
                    '$group': {
                        '_id': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$createdAt'
                            }
                        },
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
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getAllByMonth = async (req, res) => {
    try {
        const tickets = await Ticket.aggregate(
            [
                {
                    '$unwind': {
                        'path': '$quantity'
                    }
                }, {
                    '$match': {
                        'quantity': true
                    }
                }, {
                    '$project': {
                        'createdAt': '$createdAt',
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        },
                        'quantity': '$quantity',
                        'price': '$price'
                    }
                }, {
                    '$group': {
                        '_id': {
                            '$dateToString': {
                                'format': '%Y-%m',
                                'date': '$createdAt'
                            }
                        },
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
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getAllByYear = async (req, res) => {
    try {
        const tickets = await Ticket.aggregate(
            [
                {
                    '$unwind': {
                        'path': '$quantity'
                    }
                }, {
                    '$match': {
                        'quantity': true
                    }
                }, {
                    '$project': {
                        'createdAt': '$createdAt',
                        'month': {
                            '$month': '$createdAt'
                        },
                        'year': {
                            '$year': '$createdAt'
                        },
                        'quantity': '$quantity',
                        'price': '$price'
                    }
                }, {
                    '$group': {
                        '_id': {
                            '$dateToString': {
                                'format': '%Y',
                                'date': '$createdAt'
                            }
                        },
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
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getAll = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.create = async (req, res) => {
    const newTicket = new Ticket(req.body);

    try {
        const saved = await newTicket.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Ticket.findByIdAndUpdate(
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
        await Ticket.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}