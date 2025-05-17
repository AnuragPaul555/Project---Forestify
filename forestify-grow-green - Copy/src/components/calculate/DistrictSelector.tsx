
import React, { useState } from 'react';
import { districtsData, DistrictData } from '@/data/districts_data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LeafyGreen } from 'lucide-react';

interface DistrictSelectorProps {
  onDistrictSelect: (district: DistrictData | null) => void;
}

const DistrictSelector: React.FC<DistrictSelectorProps> = ({ 
  onDistrictSelect 
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [districtInfo, setDistrictInfo] = useState<DistrictData | null>(null);

  const handleDistrictSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const district = districtsData.find(
      d => d.District.toLowerCase() === selectedDistrict.toLowerCase()
    );
    setDistrictInfo(district || null);
    onDistrictSelect(district || null);
    console.log("Selected district:", district);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-forest-700">
          <LeafyGreen className="h-5 w-5 mr-2" />
          Step 1: District Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleDistrictSubmit}>
          <div className="mb-4">
            <Label htmlFor="district">Select District</Label>
            <Select 
              value={selectedDistrict} 
              onValueChange={setSelectedDistrict}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a district" />
              </SelectTrigger>
              <SelectContent>
                {districtsData.map((district) => (
                  <SelectItem key={district.District} value={district.District}>
                    {district.District}, {district.State_Union_Territory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit"
            disabled={!selectedDistrict}
            className="w-full bg-forest-600 hover:bg-forest-700 text-white"
          >
            Get District Info
          </Button>
        </form>

        {districtInfo && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2 text-forest-700">District Details</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>State/UT</TableHead>
                  <TableHead>District</TableHead>
                  <TableHead>Soil Type</TableHead>
                  <TableHead>Climate Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{districtInfo.State_Union_Territory}</TableCell>
                  <TableCell>{districtInfo.District}</TableCell>
                  <TableCell>{districtInfo.Soil_Type}</TableCell>
                  <TableCell>{districtInfo.Climate_Type}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DistrictSelector;
