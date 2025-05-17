const mongoose = require('mongoose');
const dotenv = require('dotenv');
const District = require('../models/District');
const Tree = require('../models/Tree');
const Team = require('../models/Team');
const { districtsData } = require('../data/districts_data');
const { treesData } = require('../data/trees_data');
const { teamData } = require('../data/team_data');

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/forestify', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await District.deleteMany();
    await Tree.deleteMany();
    await Team.deleteMany();

    // Seed districts
    await District.insertMany(districtsData);
    console.log('Districts data seeded successfully');

    // Seed trees
    await Tree.insertMany(treesData);
    console.log('Trees data seeded successfully');

    // Seed team
    await Team.insertMany(teamData);
    console.log('Team data seeded successfully');

    console.log('All data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData(); 