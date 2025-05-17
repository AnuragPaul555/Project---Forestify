
export interface TreeData {
  Common_Name: string;
  Scientific_Name: string;
  Oxygen_Output_Full_Growth_kg_year: number;
  First_Flowering_Time_years: number;
  Full_Growth_Time_years: number;
  Soil_Type: string;
  Region_Suitability: string;
  Climate_Suitability: string;
  Above_Ground_Biomass_kg_m_sq: number;
  Below_Ground_Biomass_kg_m_sq: number;
  Total_Biomass_kg_m_sq: number;
  Total_Carbon_TC_kg_per_meter2: number;
  Carbon_Sequestration_kg_year_m_sq: number;
  Trunk_Size_m: number;
  Tree_Height_m: number;
  Branch_Length_m: number;
  Crown_Diameter_m: number;
  Crown_Area_m_sq: number;
  Root_Span_m_sq: number;
  Total_AGB_kg: number;
  Total_BGB_kg: number;
  Total_Biomass_kg: number;
  Total_Carbon_kg: number;
  Total_Carbon_Sequestration_kg: number;
  Carbon_Sequestration_First_Flowering_kg_year: number;
  Oxygen_Output_First_Flowering_kg_year: number;
}

// Sample tree data (this would be expanded in a real application)
export const treesData: TreeData[] = [
  {
    Common_Name: "Neem",
    Scientific_Name: "Azadirachta indica",
    Oxygen_Output_Full_Growth_kg_year: 118,
    First_Flowering_Time_years: 5,
    Full_Growth_Time_years: 15,
    Soil_Type: "Alluvial",
    Region_Suitability: "North India, South India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 250,
    Below_Ground_Biomass_kg_m_sq: 75,
    Total_Biomass_kg_m_sq: 325,
    Total_Carbon_TC_kg_per_meter2: 162.5,
    Carbon_Sequestration_kg_year_m_sq: 10.83,
    Trunk_Size_m: 1.5,
    Tree_Height_m: 20,
    Branch_Length_m: 3,
    Crown_Diameter_m: 8,
    Crown_Area_m_sq: 50.24,
    Root_Span_m_sq: 30,
    Total_AGB_kg: 12560,
    Total_BGB_kg: 3768,
    Total_Biomass_kg: 16328,
    Total_Carbon_kg: 8164,
    Total_Carbon_Sequestration_kg: 544.27,
    Carbon_Sequestration_First_Flowering_kg_year: 181.42,
    Oxygen_Output_First_Flowering_kg_year: 48
  },
  {
    Common_Name: "Banyan",
    Scientific_Name: "Ficus benghalensis",
    Oxygen_Output_Full_Growth_kg_year: 220,
    First_Flowering_Time_years: 8,
    Full_Growth_Time_years: 40,
    Soil_Type: "Alluvial",
    Region_Suitability: "All over India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 600,
    Below_Ground_Biomass_kg_m_sq: 180,
    Total_Biomass_kg_m_sq: 780,
    Total_Carbon_TC_kg_per_meter2: 390,
    Carbon_Sequestration_kg_year_m_sq: 9.75,
    Trunk_Size_m: 3,
    Tree_Height_m: 30,
    Branch_Length_m: 10,
    Crown_Diameter_m: 30,
    Crown_Area_m_sq: 706.5,
    Root_Span_m_sq: 80,
    Total_AGB_kg: 423900,
    Total_BGB_kg: 127170,
    Total_Biomass_kg: 551070,
    Total_Carbon_kg: 275535,
    Total_Carbon_Sequestration_kg: 6888.38,
    Carbon_Sequestration_First_Flowering_kg_year: 1377.68,
    Oxygen_Output_First_Flowering_kg_year: 65
  },
  {
    Common_Name: "Mango",
    Scientific_Name: "Mangifera indica",
    Oxygen_Output_Full_Growth_kg_year: 90,
    First_Flowering_Time_years: 4,
    Full_Growth_Time_years: 15,
    Soil_Type: "Laterite",
    Region_Suitability: "All over India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 280,
    Below_Ground_Biomass_kg_m_sq: 84,
    Total_Biomass_kg_m_sq: 364,
    Total_Carbon_TC_kg_per_meter2: 182,
    Carbon_Sequestration_kg_year_m_sq: 12.13,
    Trunk_Size_m: 1.2,
    Tree_Height_m: 15,
    Branch_Length_m: 4,
    Crown_Diameter_m: 10,
    Crown_Area_m_sq: 78.5,
    Root_Span_m_sq: 40,
    Total_AGB_kg: 21980,
    Total_BGB_kg: 6594,
    Total_Biomass_kg: 28574,
    Total_Carbon_kg: 14287,
    Total_Carbon_Sequestration_kg: 952.47,
    Carbon_Sequestration_First_Flowering_kg_year: 253.99,
    Oxygen_Output_First_Flowering_kg_year: 38
  },
  {
    Common_Name: "Ashoka Tree",
    Scientific_Name: "Saraca asoca",
    Oxygen_Output_Full_Growth_kg_year: 60,
    First_Flowering_Time_years: 6,
    Full_Growth_Time_years: 20,
    Soil_Type: "Red",
    Region_Suitability: "South India, East India",
    Climate_Suitability: "Tropical, Subtropical Humid",
    Above_Ground_Biomass_kg_m_sq: 180,
    Below_Ground_Biomass_kg_m_sq: 54,
    Total_Biomass_kg_m_sq: 234,
    Total_Carbon_TC_kg_per_meter2: 117,
    Carbon_Sequestration_kg_year_m_sq: 5.85,
    Trunk_Size_m: 0.8,
    Tree_Height_m: 10,
    Branch_Length_m: 2.5,
    Crown_Diameter_m: 5,
    Crown_Area_m_sq: 19.63,
    Root_Span_m_sq: 15,
    Total_AGB_kg: 3533.4,
    Total_BGB_kg: 1060.02,
    Total_Biomass_kg: 4593.42,
    Total_Carbon_kg: 2296.71,
    Total_Carbon_Sequestration_kg: 114.84,
    Carbon_Sequestration_First_Flowering_kg_year: 34.45,
    Oxygen_Output_First_Flowering_kg_year: 24
  },
  {
    Common_Name: "Teak",
    Scientific_Name: "Tectona grandis",
    Oxygen_Output_Full_Growth_kg_year: 95,
    First_Flowering_Time_years: 10,
    Full_Growth_Time_years: 25,
    Soil_Type: "Black",
    Region_Suitability: "Central India, South India",
    Climate_Suitability: "Tropical Moist, Semi-arid",
    Above_Ground_Biomass_kg_m_sq: 320,
    Below_Ground_Biomass_kg_m_sq: 96,
    Total_Biomass_kg_m_sq: 416,
    Total_Carbon_TC_kg_per_meter2: 208,
    Carbon_Sequestration_kg_year_m_sq: 8.32,
    Trunk_Size_m: 1.8,
    Tree_Height_m: 25,
    Branch_Length_m: 3.5,
    Crown_Diameter_m: 9,
    Crown_Area_m_sq: 63.59,
    Root_Span_m_sq: 35,
    Total_AGB_kg: 20348.8,
    Total_BGB_kg: 6104.64,
    Total_Biomass_kg: 26453.44,
    Total_Carbon_kg: 13226.72,
    Total_Carbon_Sequestration_kg: 529.07,
    Carbon_Sequestration_First_Flowering_kg_year: 211.63,
    Oxygen_Output_First_Flowering_kg_year: 35
  },
  {
    Common_Name: "Gulmohar",
    Scientific_Name: "Delonix regia",
    Oxygen_Output_Full_Growth_kg_year: 75,
    First_Flowering_Time_years: 3,
    Full_Growth_Time_years: 12,
    Soil_Type: "Alluvial",
    Region_Suitability: "All over India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 200,
    Below_Ground_Biomass_kg_m_sq: 60,
    Total_Biomass_kg_m_sq: 260,
    Total_Carbon_TC_kg_per_meter2: 130,
    Carbon_Sequestration_kg_year_m_sq: 10.83,
    Trunk_Size_m: 1,
    Tree_Height_m: 12,
    Branch_Length_m: 5,
    Crown_Diameter_m: 12,
    Crown_Area_m_sq: 113.04,
    Root_Span_m_sq: 30,
    Total_AGB_kg: 22608,
    Total_BGB_kg: 6782.4,
    Total_Biomass_kg: 29390.4,
    Total_Carbon_kg: 14695.2,
    Total_Carbon_Sequestration_kg: 1224.6,
    Carbon_Sequestration_First_Flowering_kg_year: 306.15,
    Oxygen_Output_First_Flowering_kg_year: 30
  },
  {
    Common_Name: "Peepal",
    Scientific_Name: "Ficus religiosa",
    Oxygen_Output_Full_Growth_kg_year: 178,
    First_Flowering_Time_years: 8,
    Full_Growth_Time_years: 30,
    Soil_Type: "Alluvial",
    Region_Suitability: "All over India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 450,
    Below_Ground_Biomass_kg_m_sq: 135,
    Total_Biomass_kg_m_sq: 585,
    Total_Carbon_TC_kg_per_meter2: 292.5,
    Carbon_Sequestration_kg_year_m_sq: 9.75,
    Trunk_Size_m: 2.5,
    Tree_Height_m: 25,
    Branch_Length_m: 8,
    Crown_Diameter_m: 20,
    Crown_Area_m_sq: 314,
    Root_Span_m_sq: 60,
    Total_AGB_kg: 141300,
    Total_BGB_kg: 42390,
    Total_Biomass_kg: 183690,
    Total_Carbon_kg: 91845,
    Total_Carbon_Sequestration_kg: 3061.5,
    Carbon_Sequestration_First_Flowering_kg_year: 816.4,
    Oxygen_Output_First_Flowering_kg_year: 55
  },
  {
    Common_Name: "Coconut",
    Scientific_Name: "Cocos nucifera",
    Oxygen_Output_Full_Growth_kg_year: 70,
    First_Flowering_Time_years: 6,
    Full_Growth_Time_years: 15,
    Soil_Type: "Sandy",
    Region_Suitability: "Coastal regions",
    Climate_Suitability: "Tropical",
    Above_Ground_Biomass_kg_m_sq: 190,
    Below_Ground_Biomass_kg_m_sq: 57,
    Total_Biomass_kg_m_sq: 247,
    Total_Carbon_TC_kg_per_meter2: 123.5,
    Carbon_Sequestration_kg_year_m_sq: 8.23,
    Trunk_Size_m: 0.6,
    Tree_Height_m: 30,
    Branch_Length_m: 5,
    Crown_Diameter_m: 7,
    Crown_Area_m_sq: 38.47,
    Root_Span_m_sq: 20,
    Total_AGB_kg: 7309.3,
    Total_BGB_kg: 2192.79,
    Total_Biomass_kg: 9502.09,
    Total_Carbon_kg: 4751.05,
    Total_Carbon_Sequestration_kg: 316.73,
    Carbon_Sequestration_First_Flowering_kg_year: 126.69,
    Oxygen_Output_First_Flowering_kg_year: 32
  },
  {
    Common_Name: "Eucalyptus",
    Scientific_Name: "Eucalyptus globulus",
    Oxygen_Output_Full_Growth_kg_year: 150,
    First_Flowering_Time_years: 3,
    Full_Growth_Time_years: 10,
    Soil_Type: "Red",
    Region_Suitability: "South India, Central India",
    Climate_Suitability: "Tropical, Sub-tropical",
    Above_Ground_Biomass_kg_m_sq: 280,
    Below_Ground_Biomass_kg_m_sq: 84,
    Total_Biomass_kg_m_sq: 364,
    Total_Carbon_TC_kg_per_meter2: 182,
    Carbon_Sequestration_kg_year_m_sq: 18.2,
    Trunk_Size_m: 1.2,
    Tree_Height_m: 35,
    Branch_Length_m: 2.5,
    Crown_Diameter_m: 8,
    Crown_Area_m_sq: 50.24,
    Root_Span_m_sq: 20,
    Total_AGB_kg: 14067.2,
    Total_BGB_kg: 4220.16,
    Total_Biomass_kg: 18287.36,
    Total_Carbon_kg: 9143.68,
    Total_Carbon_Sequestration_kg: 914.37,
    Carbon_Sequestration_First_Flowering_kg_year: 274.31,
    Oxygen_Output_First_Flowering_kg_year: 50
  },
  {
    Common_Name: "Mahua",
    Scientific_Name: "Madhuca longifolia",
    Oxygen_Output_Full_Growth_kg_year: 85,
    First_Flowering_Time_years: 7,
    Full_Growth_Time_years: 20,
    Soil_Type: "Black",
    Region_Suitability: "Central India, East India",
    Climate_Suitability: "Sub-tropical, Tropical",
    Above_Ground_Biomass_kg_m_sq: 250,
    Below_Ground_Biomass_kg_m_sq: 75,
    Total_Biomass_kg_m_sq: 325,
    Total_Carbon_TC_kg_per_meter2: 162.5,
    Carbon_Sequestration_kg_year_m_sq: 8.13,
    Trunk_Size_m: 1.3,
    Tree_Height_m: 18,
    Branch_Length_m: 4,
    Crown_Diameter_m: 12,
    Crown_Area_m_sq: 113.04,
    Root_Span_m_sq: 25,
    Total_AGB_kg: 28260,
    Total_BGB_kg: 8478,
    Total_Biomass_kg: 36738,
    Total_Carbon_kg: 18369,
    Total_Carbon_Sequestration_kg: 918.45,
    Carbon_Sequestration_First_Flowering_kg_year: 321.46,
    Oxygen_Output_First_Flowering_kg_year: 35
  }
];

// Helper function to get high oxygen trees
export const getHighOxygenTrees = () => {
  return treesData.sort((a, b) => 
    b.Oxygen_Output_Full_Growth_kg_year - a.Oxygen_Output_Full_Growth_kg_year
  ).slice(0, 30);
};

// Sample additional tree list for Learn page
export const learnTrees = [
  {
    name: "Oak",
    scientific: "Quercus",
    description: "Long-living trees known for strong wood and acorn production.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2FrJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Pine",
    scientific: "Pinus",
    description: "Evergreen conifers with needle-like leaves and distinctive cones.",
    image: "https://images.unsplash.com/photo-1563952106312-346b51f6d61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZSUyMHRyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Maple",
    scientific: "Acer",
    description: "Deciduous trees known for vibrant fall colors and distinctive leaves.",
    image: "https://images.unsplash.com/photo-1530271001898-7eec65e723af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFwbGUlMjB0cmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Redwood",
    scientific: "Sequoia sempervirens",
    description: "Tallest trees on Earth, reaching heights of over 300 feet.",
    image: "https://images.unsplash.com/photo-1583981161216-e53e43f0333e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkd29vZCUyMHRyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Cherry",
    scientific: "Prunus",
    description: "Known for spectacular spring blossoms and some for fruit production.",
    image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Birch",
    scientific: "Betula",
    description: "Recognizable by their distinctive white bark that peels in thin sheets.",
    image: "https://images.unsplash.com/photo-1564254025-ab7efc4c4a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyY2glMjB0cmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
];
