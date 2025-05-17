import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeafyGreen } from "lucide-react";

interface DistrictData {
  _id: string;
  State_Union_Territory: string;
  District: string;
  Soil_Type: string;
  Climate_Type: string;
}

interface DistrictSelectorProps {
  onDistrictSelect: (district: DistrictData | null) => void;
  districtsData: DistrictData[];
}

const DistrictSelector: React.FC<DistrictSelectorProps> = ({
  onDistrictSelect,
  districtsData = [],
}) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [districtInfo, setDistrictInfo] = useState<DistrictData | null>(null);

  const safeDistrictsData = Array.isArray(districtsData) ? districtsData : [];

  const handleDistrictSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const district = safeDistrictsData.find(
      (d) => d._id === selectedDistrictId
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
              value={selectedDistrictId}
              onValueChange={setSelectedDistrictId}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a district" />
              </SelectTrigger>
              <SelectContent>
                {safeDistrictsData.map((district) => (
                  <SelectItem key={district._id} value={district._id}>
                    {district.District}, {district.State_Union_Territory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={!selectedDistrictId}
            className="w-full bg-forest-600 hover:bg-forest-700 text-white"
          >
            Get District Info
          </Button>
        </form>

        {districtInfo && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2 text-forest-700">
              District Details
            </h3>
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
