const {
  create,
  getById,
  getAll,
  update,
  deleteById,
  fetchAll,
  getInforbyID,
} = require("../controller/trip");
const router = require("express").Router();

router.post("/create", create);

router.get("/id=:id", getById);

router.get("/", getAll);

router.get("/fetch", fetchAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

router.get("/:id/informations", getInforbyID);

module.exports = router;
