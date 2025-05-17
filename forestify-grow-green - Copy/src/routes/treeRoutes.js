const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

// Get all trees
router.get('/', treeController.getAllTrees);

// Get tree by ID
router.get('/:id', treeController.getTreeById);

// Create new tree
router.post('/', treeController.createTree);

// Update tree
router.put('/:id', treeController.updateTree);

// Delete tree
router.delete('/:id', treeController.deleteTree);

// Get trees by soil type
router.get('/soil/:soilType', treeController.getTreesBySoilType);

// Get trees by climate
router.get('/climate/:climate', treeController.getTreesByClimate);

// Get trees by oxygen output range
router.get('/oxygen-output', treeController.getTreesByOxygenOutput);

// Get trees by growth time
router.get('/growth-time', treeController.getTreesByGrowthTime);

module.exports = router; 