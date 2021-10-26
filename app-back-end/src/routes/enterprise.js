const {
  create,
  getById,
  getAll,
  update,
  deleteById,
} = require("../controller/enterprise");
const router = require("express").Router();

var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

router.post("/create", create);

router.get("/:id", getById);

router.get("/", getAll);

router.put("/:id", update);

router.delete("/:id", deleteById);

module.exports = router;
