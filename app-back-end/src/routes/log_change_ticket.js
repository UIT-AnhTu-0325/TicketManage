const {create, getById, getAll, update, deleteById} = require("../controller/log_change_ticket")
const router = require("express").Router();

router.get("/", create);

router.get("/:id", getById);

router.post("/", getAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

module.exports = router;