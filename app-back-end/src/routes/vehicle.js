const {create, getById, getAll, update, deleteById} = require("../controller/vehicle")
const router = require("express").Router();

router.get("/", create);

router.get("/:id", getById);

router.post("/", getAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

module.exports = router;