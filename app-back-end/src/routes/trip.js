const {create, getById, getAll, update, deleteById, fetchAll} = require("../controller/trip")
const router = require("express").Router();

router.post("/", create);

router.get("/id=:id", getById);

router.get("/", getAll); 

router.get("/fetch", fetchAll);

router.put("/:id", update); 

router.delete("/:id", deleteById);

module.exports = router;