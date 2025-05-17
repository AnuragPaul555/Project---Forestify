import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import TreeCard from "../components/TreeCard";
import { getHighOxygenTrees, learnTrees, TreeData } from "../data/trees_data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Search } from "lucide-react";

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [treesData, setTreesData] = useState<TreeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/trees");
        if (Array.isArray(response.data)) {
          setTreesData(response.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Error fetching trees:", err);
        setError("Failed to fetch trees data");
      } finally {
        setLoading(false);
      }
    };

    fetchTrees();
  }, []);

  const highOxygenTrees = getHighOxygenTrees(treesData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://www.britannica.com/search?query=${encodeURIComponent(
          searchQuery
        )}`,
        "_blank"
      );
    }
  };

  const handleTreeClick = (treeName: string) => {
    window.open(
      `https://www.britannica.com/search?query=${encodeURIComponent(treeName)}`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-600 mx-auto"></div>
            <p className="mt-4 text-forest-700">Loading trees data...</p>
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
            Learn About Trees
          </h1>

          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for trees, plants, or gardening topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-forest-600 hover:bg-forest-700 text-white"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
              Searches redirect to Britannica for detailed information
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-forest-700">
            <TreeDeciduous className="h-6 w-6 mr-2" />
            Trees with Highest Oxygen Production
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {highOxygenTrees.slice(0, 8).map((tree, index) => (
              <TreeCard
                key={index}
                tree={tree}
                onClick={() => handleTreeClick(tree.Common_Name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center text-forest-700">
            <TreeDeciduous className="h-6 w-6 mr-2" />
            Popular Trees to Know
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {learnTrees.map((tree, index) => (
              <TreeCard
                key={index}
                tree={tree}
                isStandardTree={true}
                onClick={() => handleTreeClick(tree.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-forest-800">
                  Keep Learning
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Trees are not just beautiful additions to our
                  landscape—they're vital for our ecosystem. They filter our
                  air, provide habitat for wildlife, prevent soil erosion, and
                  help combat climate change.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The more we understand about trees and their needs, the better
                  we can integrate them into our communities and maximize their
                  benefits.
                </p>
                <p className="text-lg text-forest-600 font-medium">
                  Keep exploring, keep planting, keep growing.
                </p>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Forest canopy"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Learn;
