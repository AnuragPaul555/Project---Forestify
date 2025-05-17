const Tree = require("../models/Tree");

exports.getAllTrees = async (req, res) => {
  try {
    const trees = await Tree.find();
    res.status(200).json(trees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
