const Rule = require("../models/rule");

exports.getAll = async (req, res) => {
    try {
        const rules = await Rule.find();
        res.status(200).json(rules);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Rule.findByIdAndUpdate(
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
