const {
  Enterprise,
  Vehicle,
  Route,
  Steersman,
  Profile,
} = require("../models/index");

exports.getAllName = async (req, res) => {
  try {
    const enterpriseList = await Enterprise.find();

    var data = []

    for (let i = 0; i < enterpriseList.length; i++) {
      data.push(enterpriseList[i].name)
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAll = async (req, res) => {
  try {
    const enterpriseList = await Enterprise.find();
    res.status(200).json({ enterpriseList });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const enterprise = await Enterprise.findById(req.params.id);
    res.status(200).json(enterprise);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.create = async (req, res) => {
  const newEnterprise = new Enterprise({
    name: req.body.name,
    address: req.body.address,
  });
  console.log(req.body);
  try {
    const saved = await newEnterprise.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Enterprise.findByIdAndUpdate(
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
    await Enterprise.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getInforbyID = async (req, res) => {
  try {
    const enterprise = await Enterprise.findById(req.params.id);
    const routes = await Route.find({ idEnterprise: enterprise._id }).exec();
    const vehicles = await Vehicle.find({
      idEnterprise: enterprise._id,
    }).exec();
    var steersmans = await Steersman.find({
      idEnterprise: enterprise._id,
    }).populate("idUser");
    res.status(200).json({
      enterprise: enterprise,
      routes: routes,
      vehicles: vehicles,
      steersmans: steersmans,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
