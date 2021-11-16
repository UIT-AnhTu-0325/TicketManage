const { Profile } = require("../models");
const Steersman = require("../models/steersman");
const user = require("../models/user");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res) => {
  try {
    const steersman = await Steersman.find();
    res.status(200).json(steersman);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const steersman = await Steersman.findById(req.params.id);
    res.status(200).json(steersman);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.create = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    username,
    contactNumber,
    role,
  } = req.body;
  const hash_password = await bcrypt.hash(password, 10);
  try {
    const _user = new user({
      firstName,
      lastName,
      email,
      hash_password,
      //username,
      contactNumber,
      role,
    });
    _user.save();

    let { dob, gender, avatar } = req.body;
    let _profile = new Profile({
      account: _user._id,
      avatar,
      dob,
      gender,
    });

    _profile.save();

    const { idEnterprise, position } = req.body;
    const newSteersman = new Steersman({
      idEnterprise,
      idUser: _user._id,
      position,
    });

    const saved = await newSteersman.save();
    res.status(200).json({ saved, _user, _profile });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Steersman.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteById = async (req, res) => {
  try {
    await Steersman.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
