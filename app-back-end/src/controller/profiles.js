const Profile = require("../models/profile");
const User = require("../models/user.js");
const env = require("dotenv");
const e = require("express");
const { model } = require("mongoose");

env.config();

exports.userProfile = async (req, res) => {
  try {
    let { username } = req.params;
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // let profile = await Profile.findOne({ account: user._id });
    // return res.status(200).json({
    //     profile,
    //     success: true,
    //     //User: user.getUserInfo(),
    // });
    let profile = await Profile.findOne({ account: user._id }).populate(
      "account",
      "firstName lastName username email",
      User
    );
    return res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.UpdateProfile = async (req, res) => {
  try {
    let { dob, gender } = req.body;
    let path = process.env.APP_DOMAIN + req.file.path.replace(/^.*[\\\/]/, "");
    let profile = await Profile.findOneAndUpdate(
      { account: req.user._id },
      { dob, gender, avatar: path },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Your profile is now update",
      profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Unable to get profile",
    });
  }
};

exports.myProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ account: req.user._id }).populate(
      "account",
      "firstName lastName username email",
      User
    );
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Your profile is not available",
      });
    }
    return res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Unable to get profile",
    });
  }
};

exports.profiles = async (req, res) => {
  try {
    let { dob, gender } = req.body;
    //let path = process.env.APP_DOMAIN + (req.file.path).split("uploads/")[1];
    let path = process.env.APP_DOMAIN + req.file.path.replace(/^.*[\\\/]/, "");
    let _profile = new Profile({
      account: req.user._id,
      avatar: path,
      dob,
      gender,
    });
    console.log("USER_PROFILE", _profile);
    _profile.save((error, data) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
      if (data) {
        return res.status(201).json({
          message: "Profile create successfully",
        });
      }
    });
  } catch (error) {
    //console.log(error);
    return res.status(400).json({
      success: false,
      message: "Unable to create your profile",
    });
  }
};
