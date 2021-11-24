const Ticket = require("../models/ticket");



exports.getMonthByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
        const tickets = await Ticket.aggregate(
            [
                {
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
                    '$unwind': {
                        'path': '$quantity'
                    }
                }, {
                    '$match': {
                        'quantity': true
                    }
                }, {
                    '$project': {
                        'date': '$startDate',
                        'month': {
                            '$month': '$startDate'
                        },
                        'year': {
                            '$year': '$startDate'
                        },
                        'quantity': '$quantity',
                        'price': '$price'
                    }
                }, {
                    '$match': {
                        'month': month,
                        'year': year
                    }
                }, {
                    '$group': {
                        '_id': {
                            '$dateToString': {
                                'format': '%Y-%m',
                                'date': '$date'
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

        var totalTicket = tickets[0].totalTicket
        var totalSale = tickets[0].totalSale

        res.status(200).json({
            totalTicket,
            totalSale
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.getDateByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
        const tickets = await Ticket.aggregate(
            [
                {
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
                    '$unwind': {
                        'path': '$quantity'
                    }
                }, {
                    '$match': {
                        'quantity': true
                    }
                }, {
                    '$project': {
                        'date': '$startDate',
                        'month': {
                            '$month': '$startDate'
                        },
                        'year': {
                            '$year': '$startDate'
                        },
                        'quantity': '$quantity',
                        'price': '$price'
                    }
                }, {
                    '$match': {
                        'month': month,
                        'year': year
                    }
                }, {
                    '$group': {
                        '_id': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$date'
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