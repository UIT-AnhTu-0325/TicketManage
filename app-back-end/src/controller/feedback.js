const Feedback = require("../models/feedback");

exports.getAll = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.getById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.status(200).json(feedback);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newFeedback = new Feedback(req.body);
    
    try {
        const saved = await newFeedback.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Feedback.findByIdAndUpdate(
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
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}