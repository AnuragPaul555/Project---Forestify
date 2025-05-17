const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
  Common_Name: {
    type: String,
    required: true,
  },
  Scientific_Name: {
    type: String,
    required: true,
  },
  Oxygen_Output_Full_Growth_kg_year: {
    type: Number,
    required: true,
  },
  First_Flowering_Time_years: {
    type: Number,
    required: true,
  },
  Full_Growth_Time_years: {
    type: Number,
    required: true,
  },
  Soil_Type: {
    type: String,
    required: true,
  },
  Region_Suitability: {
    type: String,
    required: true,
  },
  Climate_Suitability: {
    type: String,
    required: true,
  },
  Above_Ground_Biomass_kg_m_sq: {
    type: Number,
    required: true,
  },
  Below_Ground_Biomass_kg_m_sq: {
    type: Number,
    required: true,
  },
  Total_Biomass_kg_m_sq: {
    type: Number,
    required: true,
  },
  Total_Carbon_TC_kg_per_meter2: {
    type: Number,
    required: true,
  },
  Carbon_Sequestration_kg_year_m_sq: {
    type: Number,
    required: true,
  },
  Trunk_Size_m: {
    type: Number,
    required: true,
  },
  Tree_Height_m: {
    type: Number,
    required: true,
  },
  Branch_Length_m: {
    type: Number,
    required: true,
  },
  Crown_Diameter_m: {
    type: Number,
    required: true,
  },
  Crown_Area_m_sq: {
    type: Number,
    required: true,
  },
  Root_Span_m_sq: {
    type: Number,
    required: true,
  },
  Total_AGB_kg: {
    type: Number,
    required: true,
  },
  Total_BGB_kg: {
    type: Number,
    required: true,
  },
  Total_Biomass_kg: {
    type: Number,
    required: true,
  },
  Total_Carbon_kg: {
    type: Number,
    required: true,
  },
  Total_Carbon_Sequestration_kg: {
    type: Number,
    required: true,
  },
  Carbon_Sequestration_First_Flowering_kg_year: {
    type: Number,
    required: true,
  },
  Oxygen_Output_First_Flowering_kg_year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tree", treeSchema);
