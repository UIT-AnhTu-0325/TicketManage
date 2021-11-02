const User = require("../models/user.js");
const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Email already registered",
      });
  });
  User.findOne({ username: req.body.username }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Username already registered",
      });
  });

  const { firstName, lastName, email, password, username, contactNumber } = req.body;
  const hash_password = await bcrypt.hash(password, 10);
  const _user = new User({
    firstName,
    lastName,
    email,
    hash_password,
    username,
    contactNumber
  });

  _user.save((error, data) => {
    if (error) {
      return res.status(400).json({
        message: error, 
      });
    }
    if (data) {
      return res.status(201).json({
        message: "Create successfully",
        _user
      });
    }
  });

  let { dob, gender, avatar } = req.body;
  let _profile = new Profile({
    account: _user._id,
    avatar,
    dob,
    gender,
  })
  console.log("USER_PROFILE", _profile);
  _profile.save((error, data) => {
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, firstName, lastName, email, role, fullName, contactNumber } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
            contactNumber
          },
          message: "Login successfully <3"
        });
      } else {
        return res.status(400).json({
          message: "Invalid password",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};
