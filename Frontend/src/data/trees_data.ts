export interface TreeData {
  _id?: string;
  Common_Name: string;
  Scientific_Name: string;
  Oxygen_Output_Full_Growth_kg_year: number;
  First_Flowering_Time_years: number;
  Full_Growth_Time_years: number;
  Soil_Type: string;
  Additional_Benefit: string;
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

// Helper function to get high oxygen trees
export const getHighOxygenTrees = (treeData: TreeData[]) => {
  return treeData
    .sort(
      (a, b) =>
        b.Oxygen_Output_Full_Growth_kg_year -
        a.Oxygen_Output_Full_Growth_kg_year
    )
    .slice(0, 30);
};

// Sample additional tree list for Learn page
export const learnTrees = [
  {
    name: "Oak",
    scientific: "Quercus",
    description:
      "Long-living trees known for strong wood and acorn production.",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2FrJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Pine",
    scientific: "Pinus",
    description:
      "Evergreen conifers with needle-like leaves and distinctive cones.",
    image:
      "https://images.unsplash.com/photo-1563952106312-346b51f6d61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZSUyMHRyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Maple",
    scientific: "Acer",
    description:
      "Deciduous trees known for vibrant fall colors and distinctive leaves.",
    image:
      "https://images.unsplash.com/photo-1530271001898-7eec65e723af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFwbGUlMjB0cmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Redwood",
    scientific: "Sequoia sempervirens",
    description: "Tallest trees on Earth, reaching heights of over 300 feet.",
    image:
      "https://images.unsplash.com/photo-1583981161216-e53e43f0333e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkd29vZCUyMHRyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Cherry",
    scientific: "Prunus",
    description:
      "Known for spectacular spring blossoms and some for fruit production.",
    image:
      "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlcnJ5JTIwYmxvc3NvbXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Birch",
    scientific: "Betula",
    description:
      "Recognizable by their distinctive white bark that peels in thin sheets.",
    image:
      "https://images.unsplash.com/photo-1564254025-ab7efc4c4a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyY2glMjB0cmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];
