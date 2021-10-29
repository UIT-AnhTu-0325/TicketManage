const Goods = require("../models/goods");

exports.getAll = async (req, res) => {
    try {
        const goodses = await Goods.find();
        res.status(200).json(goodses);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const goods = await Goods.findById(req.params.id);
        res.status(200).json(goods);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newGoods = new Goods(req.body);
    
    try {
        const saved = await newGoods.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Goods.findByIdAndUpdate(
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
}

exports.deleteById = async (req, res) => {
    try {
        await Goods.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}