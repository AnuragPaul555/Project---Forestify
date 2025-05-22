import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { DistrictData } from "../data/districts_data";
import { TreeData } from "../data/trees_data";
import DistrictSelector from "../components/calculate/DistrictSelector";
import TreeRecommendationForm from "../components/calculate/TreeRecommendationForm";
import TreeResultsDisplay from "../components/calculate/TreeResultsDisplay";

interface DistrictDataWithId extends DistrictData {
  _id: string;
}

const Calculate = () => {
  const [districtInfo, setDistrictInfo] = useState<DistrictDataWithId | null>(
    null
  );
  const [treesData, setTreesData] = useState<TreeData[]>([]);
  const [districtsData, setDistrictsData] = useState<DistrictDataWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [recommendedTrees, setRecommendedTrees] = useState<
    Array<TreeData & { treeCount: number }>
  >([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [treesResponse, districtsResponse] = await Promise.all([
          axios.get("http://localhost:4000/api/trees"),
          axios.get("http://localhost:4000/api/districts"),
        ]);

        // Validate and transform the data
        const trees = Array.isArray(treesResponse.data)
          ? treesResponse.data
          : [];
        const districts = Array.isArray(districtsResponse.data)
          ? districtsResponse.data
          : [];

        console.log("Trees response:", trees);
        console.log("Districts response:", districts);

        if (!Array.isArray(trees) || !Array.isArray(districts)) {
          throw new Error("Invalid data format received from API");
        }

        setTreesData(trees);
        setDistrictsData(districts);
      } catch (err) {
        console.error("Error fetching or processing data:", err);
        setError("Failed to fetch or process data");
        setTreesData([]);
        setDistrictsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDistrictSelect = (district: DistrictDataWithId | null) => {
    setDistrictInfo(district);
    setHasSearched(false);
  };

  const handleRecommendSubmit = (
    landAreaNum: number,
    floweringTimeNum: number
  ) => {
    if (!districtInfo) {
      return;
    }

    console.log("Filtering trees with params:", {
      soilType: districtInfo.Soil_Type,
      landArea: landAreaNum,
      floweringTime: floweringTimeNum,
    });

    const filteredTrees = treesData
      .filter((tree) => {
        const districtSoilTypes = districtInfo.Soil_Type.toLowerCase()
          .split(",")
          .map((s) => s.trim());
        const treeSoilTypes = tree.Soil_Type.toLowerCase()
          .split(",")
          .map((s) => s.trim());
        const soilMatch = districtSoilTypes.some((districtSoil) =>
          treeSoilTypes.some((treeSoil) => districtSoil === treeSoil)
        );

        const areaCheck = tree.Crown_Area_m_sq <= landAreaNum;

        const floweringCheck =
          tree.First_Flowering_Time_years <= floweringTimeNum;

        return soilMatch && areaCheck && floweringCheck;
      })
      .map((tree) => {
        const treeCount = Math.floor(landAreaNum / tree.Crown_Area_m_sq);
        return { ...tree, treeCount };
      });

    console.log(`Found ${filteredTrees.length} matching trees`);
    setRecommendedTrees(filteredTrees);
    setHasSearched(true);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-600 mx-auto"></div>
            <p className="mt-4 text-forest-700">Loading data...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-10 bg-gradient-to-b from-forest-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-forest-800">
            Calculate Tree Recommendations
          </h1>
          <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Get personalized tree recommendations based on your location and
            requirements. Our system considers soil type, climate, land area,
            and your desired flowering time.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* District Selector Component */}
            <DistrictSelector
              onDistrictSelect={handleDistrictSelect}
              districtsData={districtsData}
            />

            {/* Tree Recommendation Form Component */}
            <TreeRecommendationForm
              districtInfo={districtInfo}
              onSubmit={handleRecommendSubmit}
            />
          </div>
        </div>
      </section>

      {/* Tree Results Display Component */}
      {hasSearched && (
        <TreeResultsDisplay
          trees={recommendedTrees}
          noResultsMessage="No trees found matching your criteria. Try adjusting your requirements."
        />
      )}
    </Layout>
  );
};

export default Calculate;
