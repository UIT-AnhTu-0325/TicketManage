const Profile = require("../models/profile");
const env = require("dotenv");

env.config();


exports.profiles = async (req, res) => {
    try {
        let { dob, gender } = req.body;
        //let path = process.env.APP_DOMAIN + (req.file.path).split("uploads/")[1];
        let path = process.env.APP_DOMAIN + (req.file.path).replace(/^.*[\\\/]/, '');
        let _profile = new Profile({
            account: req.user._id,
            avatar: path,
            dob,
            gender,
        })
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
        })
    }
};