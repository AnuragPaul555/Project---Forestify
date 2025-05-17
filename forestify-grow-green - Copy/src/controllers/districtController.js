const District = require('../models/District');

// Get all districts
exports.getAllDistricts = async (req, res) => {
  try {
    const districts = await District.find();
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get district by ID
exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findById(req.params.id);
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }
    res.status(200).json(district);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new district
exports.createDistrict = async (req, res) => {
  const district = new District(req.body);
  try {
    const newDistrict = await district.save();
    res.status(201).json(newDistrict);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update district
exports.updateDistrict = async (req, res) => {
  try {
    const district = await District.findById(req.params.id);
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }
    Object.assign(district, req.body);
    const updatedDistrict = await district.save();
    res.status(200).json(updatedDistrict);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete district
exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findById(req.params.id);
    if (!district) {
      return res.status(404).json({ message: 'District not found' });
    }
    await district.remove();
    res.status(200).json({ message: 'District deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get districts by state
exports.getDistrictsByState = async (req, res) => {
  try {
    const districts = await District.find({ State_Union_Territory: req.params.state });
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get districts by soil type
exports.getDistrictsBySoilType = async (req, res) => {
  try {
    const districts = await District.find({ Soil_Type: req.params.soilType });
    res.status(200).json(districts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 