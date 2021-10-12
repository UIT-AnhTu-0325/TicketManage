const Ticket = require("../models/ticket");
const {addTicket, getById, getAll} = require("../controller/ticket")
const router = require("express").Router();

router.get("/", addTicket);

router.get("/:id", getById);

router.post("/", getAll);

module.exports = router;