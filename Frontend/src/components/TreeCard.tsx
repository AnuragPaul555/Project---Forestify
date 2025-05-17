
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { TreeData } from '../data/trees_data';

interface TreeCardProps {
  tree: TreeData | { 
    name: string;
    scientific: string;
    description: string;
    image: string;
  };
  onClick?: () => void;
  isStandardTree?: boolean;
}

const TreeCard: React.FC<TreeCardProps> = ({ tree, onClick, isStandardTree = false }) => {
  // Default placeholder image
  const placeholderImage = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2FrJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
  
  // Different card layout based on tree data structure
  if (isStandardTree) {
    // For trees from the learnTrees array
    const standardTree = tree as { name: string; scientific: string; description: string; image: string };
    
    return (
      <Card 
        className="overflow-hidden hover-grow cursor-pointer h-full flex flex-col"
        onClick={onClick}
      >
        <div className="h-40 overflow-hidden">
          <img 
            src={standardTree.image || placeholderImage} 
            alt={standardTree.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="font-bold text-lg text-forest-700">{standardTree.name}</h3>
          <p className="text-sm italic text-gray-500 mb-2">{standardTree.scientific}</p>
          <p className="text-sm text-gray-600">{standardTree.description}</p>
        </CardContent>
      </Card>
    );
  }
  
  // For trees from the treesData array
  const dataTree = tree as TreeData;
  
  return (
    <Card 
      className="overflow-hidden hover-grow cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="h-40 overflow-hidden bg-forest-100">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-5xl">🌳</span>
        </div>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-lg text-forest-700">{dataTree.Common_Name}</h3>
        <p className="text-sm italic text-gray-500 mb-2">{dataTree.Scientific_Name}</p>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <div>
            <span className="font-medium">Oxygen Output:</span> 
            <span className="text-forest-600"> {dataTree.Oxygen_Output_Full_Growth_kg_year} kg/year</span>
          </div>
          <div>
            <span className="font-medium">Flowering:</span> 
            <span className="text-forest-600"> {dataTree.First_Flowering_Time_years} years</span>
          </div>
          <div>
            <span className="font-medium">Soil Type:</span> 
            <span className="text-forest-600"> {dataTree.Soil_Type}</span>
          </div>
          <div>
            <span className="font-medium">Climate:</span> 
            <span className="text-forest-600"> {dataTree.Climate_Suitability}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-forest-50 px-4 py-2 text-xs text-forest-700">
        Click to learn more
      </CardFooter>
    </Card>
  );
};

export default TreeCard;
