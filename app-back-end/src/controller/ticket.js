const Ticket = require("../models/ticket");

exports.getMonthByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
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
                    '$match': {
                        'month': month,
                        'year': year
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

exports.getDateByMonthYear = async (req, res) => {
    try {
        const { month, year } = req.body
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
                    '$match': {
                        'month': month,
                        'year': year
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