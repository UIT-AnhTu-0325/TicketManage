const User = require("../../models/user.js");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Admin email already registered",
      });
    User.findOne({ username: req.body.username }).exec((error, user) => {
      if (user)
        return res.status(400).json({
          message: "Admin username already registered",
        });

      const { firstName, lastName, email, password, username } = req.body;
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username,
        role: "admin",
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (data) {
          return res.status(201).json({
            message: "Admin create successfully",
          });
        }
      });
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password) && user.role === "admin") {
        const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: "Your username or password may be incorrect",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};
