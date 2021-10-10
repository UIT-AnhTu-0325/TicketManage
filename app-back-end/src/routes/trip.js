const Trip = require("../models/trip");
const {addTrip, getById, getAll} = require("../controller/trip")
const router = require("express").Router();

router.get("/", addTrip);

router.get("/:id", getById);

router.post("/", getAll);

module.exports = router;