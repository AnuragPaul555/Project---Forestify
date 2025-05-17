const Tree = require('../models/Tree');

// Get all trees
exports.getAllTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get tree by ID
exports.getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).json({ message: 'Tree not found' });
    }
    res.status(200).json(tree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new tree
exports.createTree = async (req, res) => {
  const tree = new Tree(req.body);
  try {
    const newTree = await tree.save();
    res.status(201).json(newTree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update tree
exports.updateTree = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).json({ message: 'Tree not found' });
    }
    Object.assign(tree, req.body);
    const updatedTree = await tree.save();
    res.status(200).json(updatedTree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete tree
exports.deleteTree = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).json({ message: 'Tree not found' });
    }
    await tree.remove();
    res.status(200).json({ message: 'Tree deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get trees by soil type
exports.getTreesBySoilType = async (req, res) => {
  try {
    const trees = await Tree.find({ Soil_Type: req.params.soilType });
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get trees by climate suitability
exports.getTreesByClimate = async (req, res) => {
  try {
    const trees = await Tree.find({ Climate_Suitability: { $regex: req.params.climate, $options: 'i' } });
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get trees by oxygen output range
exports.getTreesByOxygenOutput = async (req, res) => {
  try {
    const { min, max } = req.query;
    const trees = await Tree.find({
      Oxygen_Output_Full_Growth_kg_year: {
        $gte: parseFloat(min) || 0,
        $lte: parseFloat(max) || Number.MAX_VALUE
      }
    });
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get trees by growth time
exports.getTreesByGrowthTime = async (req, res) => {
  try {
    const { maxYears } = req.query;
    const trees = await Tree.find({
      Full_Growth_Time_years: { $lte: parseFloat(maxYears) }
    });
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 