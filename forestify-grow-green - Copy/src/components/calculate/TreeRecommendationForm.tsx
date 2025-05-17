
import React, { useState } from 'react';
import { DistrictData } from '@/data/districts_data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

interface TreeRecommendationFormProps {
  districtInfo: DistrictData | null;
  onSubmit: (landArea: number, floweringTime: number) => void;
}

const TreeRecommendationForm: React.FC<TreeRecommendationFormProps> = ({
  districtInfo,
  onSubmit
}) => {
  const [landArea, setLandArea] = useState<string>('');
  const [floweringTime, setFloweringTime] = useState<string>('');

  const handleRecommendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!districtInfo || !landArea || !floweringTime) {
      return;
    }
    
    const landAreaNum = parseFloat(landArea);
    const floweringTimeNum = parseFloat(floweringTime);
    
    onSubmit(landAreaNum, floweringTimeNum);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-forest-700">
          <Calculator className="h-5 w-5 mr-2" />
          Step 2: Get Tree Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRecommendSubmit}>
          <div className="mb-4">
            <Label htmlFor="landArea">Land Area (m²)</Label>
            <Input
              id="landArea"
              type="number"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
              placeholder="Enter land area in square meters"
              min="1"
              required
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="floweringTime">Expected Flowering Time (years)</Label>
            <Input
              id="floweringTime"
              type="number"
              value={floweringTime}
              onChange={(e) => setFloweringTime(e.target.value)}
              placeholder="Enter maximum years to wait for flowering"
              min="1"
              required
            />
          </div>

          <Button 
            type="submit"
            disabled={!districtInfo || !landArea || !floweringTime}
            className="w-full bg-forest-600 hover:bg-forest-700 text-white"
          >
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TreeRecommendationForm;
