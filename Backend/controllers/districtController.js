const District = require("../models/District");

exports.getAllDistricts = async (req, res) => {
  try {
    const districts = await District.find({});
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
