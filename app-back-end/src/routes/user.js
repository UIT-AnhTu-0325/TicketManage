const { getById, getAll } = require("../controller/user");

const router = require("express").Router();

// router.get("/:id", getById);
router.get("/:id/userdetail", getById);

router.get("/", getAll);

module.exports = router;
