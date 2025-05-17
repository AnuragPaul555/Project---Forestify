
import React, { useState } from 'react';
import { TreeData } from '@/data/trees_data';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowUpDown } from 'lucide-react';

interface TreeResultsDisplayProps {
  trees: Array<TreeData & { treeCount: number }>;
}

type SortField = 'Oxygen_Output_First_Flowering_kg_year' | 
                'Carbon_Sequestration_First_Flowering_kg_year' | 
                'treeCount' | 
                'First_Flowering_Time_years' | 
                'Crown_Area_m_sq';

const TreeResultsDisplay: React.FC<TreeResultsDisplayProps> = ({ trees }) => {
  const [sortField, setSortField] = useState<SortField>('Oxygen_Output_First_Flowering_kg_year');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if already sorting by this field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to descending
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Sort the trees
  const sortedTrees = [...trees].sort((a, b) => {
    const fieldA = a[sortField as keyof typeof a];
    const fieldB = b[sortField as keyof typeof b];
    
    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return sortDirection === 'asc' ? fieldA - fieldB : fieldB - fieldA;
    }
    
    // Default case for strings or other types
    if (fieldA < fieldB) return sortDirection === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  if (trees.length === 0) {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <p className="text-gray-500">
              No trees match your criteria. Try increasing land area or flowering time, or select a different district.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-forest-700">Recommended Trees</h2>
        
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="text-sm font-medium">Sort by:</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSort('Oxygen_Output_First_Flowering_kg_year')}
            className={sortField === 'Oxygen_Output_First_Flowering_kg_year' ? 'bg-forest-100' : ''}
          >
            Oxygen output
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSort('Carbon_Sequestration_First_Flowering_kg_year')}
            className={sortField === 'Carbon_Sequestration_First_Flowering_kg_year' ? 'bg-forest-100' : ''}
          >
            Carbon sequestration
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSort('treeCount')}
            className={sortField === 'treeCount' ? 'bg-forest-100' : ''}
          >
            Tree count
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSort('First_Flowering_Time_years')}
            className={sortField === 'First_Flowering_Time_years' ? 'bg-forest-100' : ''}
          >
            Flowering time
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleSort('Crown_Area_m_sq')}
            className={sortField === 'Crown_Area_m_sq' ? 'bg-forest-100' : ''}
          >
            Crown area
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Common Name</TableHead>
                <TableHead>Scientific Name</TableHead>
                <TableHead>Tree Count</TableHead>
                <TableHead>First Flowering (years)</TableHead>
                <TableHead>Full Growth (years)</TableHead>
                <TableHead>Oxygen Output (kg/year)</TableHead>
                <TableHead>Carbon Seq. (kg/year)</TableHead>
                <TableHead>Crown Area (m²)</TableHead>
                <TableHead>Height (m)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTrees.map((tree, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tree.Common_Name}</TableCell>
                  <TableCell className="italic">{tree.Scientific_Name}</TableCell>
                  <TableCell>{tree.treeCount}</TableCell>
                  <TableCell>{tree.First_Flowering_Time_years}</TableCell>
                  <TableCell>{tree.Full_Growth_Time_years}</TableCell>
                  <TableCell>{tree.Oxygen_Output_First_Flowering_kg_year}</TableCell>
                  <TableCell>{tree.Carbon_Sequestration_First_Flowering_kg_year.toFixed(2)}</TableCell>
                  <TableCell>{tree.Crown_Area_m_sq}</TableCell>
                  <TableCell>{tree.Tree_Height_m}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default TreeResultsDisplay;
