const Enterprise = require("../models/enterprise");

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
  const newEnterprise = new Enterprise(req.body);

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
