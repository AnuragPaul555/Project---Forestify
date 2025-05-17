const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districtController');

// Get all districts
router.get('/', districtController.getAllDistricts);

// Get district by ID
router.get('/:id', districtController.getDistrictById);

// Create new district
router.post('/', districtController.createDistrict);

// Update district
router.put('/:id', districtController.updateDistrict);

// Delete district
router.delete('/:id', districtController.deleteDistrict);

// Get districts by state
router.get('/state/:state', districtController.getDistrictsByState);

// Get districts by soil type
router.get('/soil/:soilType', districtController.getDistrictsBySoilType);

module.exports = router; 