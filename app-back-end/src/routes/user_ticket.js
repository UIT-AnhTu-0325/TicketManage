const {create, getById, getAll, update, deleteById} = require("../controller/user_ticket")
const router = require("express").Router();

router.post("/", create);

router.get("/id=:id", getById);

router.get("/", getAll); 

router.put("/:id", update); 

router.delete("/:id", deleteById);

module.exports = router;