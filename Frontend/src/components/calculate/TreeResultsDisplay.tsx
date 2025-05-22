import React, { useState } from "react";
import { TreeData } from "@/data/trees_data";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trees } from "lucide-react";

interface TreeResultsDisplayProps {
  trees: Array<TreeData & { treeCount: number }>;
  noResultsMessage?: string;
}

type SortField =
  | "Oxygen_Output_First_Flowering_kg_year"
  | "Carbon_Sequestration_First_Flowering_kg_year"
  | "treeCount"
  | "First_Flowering_Time_years"
  | "Crown_Area_m_sq";

const TreeResultsDisplay: React.FC<TreeResultsDisplayProps> = ({
  trees,
  noResultsMessage = "No trees found matching your criteria.",
}) => {
  const [sortField, setSortField] = useState<SortField>(
    "Oxygen_Output_First_Flowering_kg_year"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if already sorting by this field
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default to descending
      setSortField(field);
      setSortDirection("desc");
    }
  };

  // Sort the trees
  const sortedTrees = [...trees].sort((a, b) => {
    const fieldA = a[sortField as keyof typeof a];
    const fieldB = b[sortField as keyof typeof b];

    if (typeof fieldA === "number" && typeof fieldB === "number") {
      return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA;
    }

    // Default case for strings or other types
    if (fieldA < fieldB) return sortDirection === "asc" ? -1 : 1;
    if (fieldA > fieldB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  if (trees.length === 0) {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-forest-700">
                <Trees className="h-5 w-5 mr-2" />
                Tree Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 py-4">
                {noResultsMessage}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-forest-700">
              <Trees className="h-5 w-5 mr-2" />
              Tree Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tree Name</TableHead>
                  <TableHead>Scientific Name</TableHead>
                  <TableHead>Soil Type</TableHead>
                  <TableHead>First Flowering (years)</TableHead>
                  <TableHead>Full Growth Time (years)</TableHead>
                  <TableHead>Crown Area (m²)</TableHead>
                  <TableHead>Tree Count</TableHead>
                  <TableHead>Additional Benefit</TableHead>
                  <TableHead>
                    Carbon Sequestration First Flowering (kg/year)
                  </TableHead>
                  <TableHead>Oxygen Output First Flowering (kg/year)</TableHead>
                  <TableHead>Oxygen Output Full Growth (kg/year)</TableHead>
                  <TableHead>Carbon_Sequestration (kg/year/m²)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trees.map((tree) => (
                  <TableRow
                    key={
                      tree._id || `${tree.Common_Name}-${tree.Scientific_Name}`
                    }
                  >
                    <TableCell className="font-medium">
                      {tree.Common_Name}
                    </TableCell>
                    <TableCell>{tree.Scientific_Name}</TableCell>
                    <TableCell>{tree.Soil_Type}</TableCell>
                    <TableCell>{tree.First_Flowering_Time_years}</TableCell>
                    <TableCell>{tree.Full_Growth_Time_years}</TableCell>
                    <TableCell>{tree.Crown_Area_m_sq}</TableCell>
                    <TableCell>{tree.treeCount}</TableCell>
                    <TableCell>{tree.Additional_Benefit}</TableCell>
                    <TableCell>
                      {tree.Carbon_Sequestration_First_Flowering_kg_year}
                    </TableCell>
                    <TableCell>
                      {tree.Oxygen_Output_First_Flowering_kg_year}
                    </TableCell>
                    <TableCell>
                      {tree.Oxygen_Output_Full_Growth_kg_year}
                    </TableCell>
                    <TableCell>
                      {tree.Carbon_Sequestration_kg_year_m_sq}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TreeResultsDisplay;
