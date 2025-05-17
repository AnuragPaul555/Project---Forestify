
export interface DistrictData {
  State_Union_Territory: string;
  District: string;
  Soil_Type: string;
  Climate_Type: string;
}

// Sample district data (this would be expanded in a real application)
export const districtsData: DistrictData[] = [
  {
    State_Union_Territory: "Assam",
    District: "Kamrup",
    Soil_Type: "Alluvial",
    Climate_Type: "Tropical Monsoon"
  },
  {
    State_Union_Territory: "Gujarat",
    District: "Ahmedabad",
    Soil_Type: "Black",
    Climate_Type: "Tropical Semi-arid"
  },
  {
    State_Union_Territory: "Kerala",
    District: "Kottayam",
    Soil_Type: "Laterite",
    Climate_Type: "Tropical Humid"
  },
  {
    State_Union_Territory: "Maharashtra",
    District: "Pune",
    Soil_Type: "Black",
    Climate_Type: "Semi-arid"
  },
  {
    State_Union_Territory: "Tamil Nadu",
    District: "Chennai",
    Soil_Type: "Red",
    Climate_Type: "Tropical Wet and Dry"
  },
  {
    State_Union_Territory: "Rajasthan",
    District: "Jaipur",
    Soil_Type: "Desert",
    Climate_Type: "Arid"
  },
  {
    State_Union_Territory: "West Bengal",
    District: "Kolkata",
    Soil_Type: "Alluvial",
    Climate_Type: "Tropical Wet"
  },
  {
    State_Union_Territory: "Uttar Pradesh",
    District: "Lucknow",
    Soil_Type: "Alluvial",
    Climate_Type: "Sub-tropical"
  },
  {
    State_Union_Territory: "Karnataka",
    District: "Bengaluru",
    Soil_Type: "Red",
    Climate_Type: "Tropical Savanna"
  },
  {
    State_Union_Territory: "Madhya Pradesh",
    District: "Bhopal",
    Soil_Type: "Black",
    Climate_Type: "Subtropical"
  }
];
