const {getAll, update} = require("../controller/rule")
const router = require("express").Router();


router.get("/", getAll);

router.put("/:id", update);


module.exports = router;