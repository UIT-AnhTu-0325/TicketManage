const {
  create,
  getById,
  getAll,
  update,
  deleteById,
  getInforbyID,
  getAllName,
} = require("../controller/enterprise");
const router = require("express").Router();

var express = require("express");
var app = express();
var multer = require("multer");
const {
  requireSignin,
  userMiddleware,
  adminMiddleware,
} = require("../common-middleware");
var upload = multer();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

router.get("/getAllName", getAllName);

router.post("/create", requireSignin, adminMiddleware, create);

router.get("/:id", getById);

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", requireSignin, adminMiddleware, deleteById);

router.get("/:id/informations", getInforbyID);

module.exports = router;
