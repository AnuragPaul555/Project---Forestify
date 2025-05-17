
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { DistrictData, districtsData2 } from '../data/districts_data';
import { TreeData } from '../data/trees_data';
import { treesData } from '../data/trees_data';
import DistrictSelector from '../components/calculate/DistrictSelector';
import TreeRecommendationForm from '../components/calculate/TreeRecommendationForm';
import TreeResultsDisplay from '../components/calculate/TreeResultsDisplay';

const Calculate = () => {
  // District form state
  const [districtInfo, setDistrictInfo] = useState<DistrictData | null>(null);

  // Tree recommendation results
  const [recommendedTrees, setRecommendedTrees] = useState<Array<TreeData & { treeCount: number }>>([]);
  
  // Handle district selection
  const handleDistrictSelect = (district: DistrictData | null) => {
    setDistrictInfo(district);
  };

  // Handle tree recommendation form submission
  const handleRecommendSubmit = (landAreaNum: number, floweringTimeNum: number) => {
    if (!districtInfo) {
      return;
    }
    
    console.log("Filtering trees with params:", {
      soilType: districtInfo.Soil_Type,
      landArea: landAreaNum,
      floweringTime: floweringTimeNum
    });
    
    const filteredTrees = treesData
      .filter(tree => {
        // Match soil type
        const soilMatch = tree.Soil_Type === districtInfo.Soil_Type;
        // Check crown area and flowering time
        const areaCheck = tree.Crown_Area_m_sq <= landAreaNum;
        const floweringCheck = tree.First_Flowering_Time_years <= floweringTimeNum;
        
        console.log(`Tree: ${tree.Common_Name}, Soil Match: ${soilMatch}, Area Check: ${areaCheck}, Flowering Check: ${floweringCheck}`);
        
        return soilMatch && areaCheck && floweringCheck;
      })
      .map(tree => {
        // Calculate tree count
        const treeCount = Math.floor(landAreaNum / tree.Crown_Area_m_sq);
        return { ...tree, treeCount };
      });
    
    console.log(`Found ${filteredTrees.length} matching trees`);
    setRecommendedTrees(filteredTrees);
  };

  return (
    <Layout>
      <section className="py-10 bg-gradient-to-b from-forest-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-forest-800">
            Calculate Tree Recommendations
          </h1>
          <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Get personalized tree recommendations based on your location and requirements. Our system considers soil type, climate, land area, and your desired flowering time.
          </p>
        </div>
        <button onClick={()=>{
          districtsData2()
        }}>
          Click me to get data
        </button>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* District Selector Component */}
            <DistrictSelector onDistrictSelect={handleDistrictSelect} />

            {/* Tree Recommendation Form Component */}
            <TreeRecommendationForm 
              districtInfo={districtInfo} 
              onSubmit={handleRecommendSubmit} 
            />
          </div>
        </div>
      </section>

      {/* Tree Results Display Component */}
      {recommendedTrees.length > 0 || (districtInfo && recommendedTrees.length === 0) ? (
        <TreeResultsDisplay trees={recommendedTrees} />
      ) : null}
    </Layout>
  );
};

export default Calculate;
