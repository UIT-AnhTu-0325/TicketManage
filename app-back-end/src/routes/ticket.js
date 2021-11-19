const {
  create,
  getById,
  getAll,
  update,
  deleteById,
  getAllByDay,
  getAllByMonth,
  getAllByYear,
  getDateByMonthYear,
  getMonthByMonthYear,
} = require("../controller/ticket");
const router = require("express").Router();

router.post("/getMonthByMonthYear", getMonthByMonthYear);

router.post("/getDateByMonthYear", getDateByMonthYear);

router.get("/getAllByDay", getAllByDay);

router.get("/getAllByMonth", getAllByMonth);

router.get("/getAllByYear", getAllByYear);

router.post("/create", create);

router.get("/:id", getById);

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

module.exports = router;
