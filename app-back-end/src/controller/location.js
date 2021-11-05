const Location = require("../models/location");
const City = require("../models/city");

exports.getAll = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
exports.fetchAll = async (req, res) => {
    try {
        let payload = [];

        const locations = await Location.find();
        const cities = await City.find();

        cities.forEach(city => {
            locations.forEach(location => {
                if(location.idCity.equals(city._id)){
                    let result = {};
                    result.city = city.name;
                    result.location = location.name;
                    payload.push(result);
                }
            })
        })
        res.status(200).json(payload);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
exports.getById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        res.status(200).json(location);
    } catch (err) {
        res.status(500).json({error:err});
    }
}

exports.create = async (req, res) => {
    const newLocation = new Location(req.body);
    
    try {
        const saved = await newLocation.save();
        res.status(200).json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.update = async (req, res) => {
    try {
        const updated = await Location.findByIdAndUpdate(
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
        await Location.findByIdAndDelete(req.params.id);
        res.status(200).json("Has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
}