
const { create, getById, getAll, update, deleteById, getTicketCanceled, getCurrentDate, getCurrentByEnterprises, getCurrentByEnterprisesList, getLastOrder } = require("../controller/user_ticket")

const router = require("express").Router();

router.get("/getLastOrder", getLastOrder);

router.get("/getCurrentByEnterprisesList", getCurrentByEnterprisesList);

router.get("/getCurrentByEnterprises", getCurrentByEnterprises);

router.get("/getCurrentDate", getCurrentDate);

router.post("/getTicketCanceled", getTicketCanceled);

router.post("/", create);

router.get("/id=:id", getById);

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

module.exports = router;
