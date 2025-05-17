import React, { useState } from "react";
import { DistrictData } from "@/data/districts_data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

interface TreeRecommendationFormProps {
  districtInfo: DistrictData | null;
  onSubmit: (landArea: number, floweringTime: number) => void;
}

const TreeRecommendationForm: React.FC<TreeRecommendationFormProps> = ({
  districtInfo,
  onSubmit,
}) => {
  const [landArea, setLandArea] = useState<string>("");
  const [floweringTime, setFloweringTime] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRecommendSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      districtInfo,
      landArea,
      floweringTime,
    });

    if (!districtInfo || !landArea || !floweringTime) {
      console.log("Missing required fields:", {
        hasDistrictInfo: !!districtInfo,
        hasLandArea: !!landArea,
        hasFloweringTime: !!floweringTime,
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const landAreaNum = parseFloat(landArea);
      const floweringTimeNum = parseFloat(floweringTime);

      console.log("Parsed values:", { landAreaNum, floweringTimeNum });

      if (isNaN(landAreaNum) || isNaN(floweringTimeNum)) {
        console.error("Invalid number values:", {
          landAreaNum,
          floweringTimeNum,
        });
        return;
      }

      onSubmit(landAreaNum, floweringTimeNum);
    } catch (error) {
      console.error("Error in form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    districtInfo &&
    landArea &&
    floweringTime &&
    !isNaN(parseFloat(landArea)) &&
    !isNaN(parseFloat(floweringTime));

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
              onChange={(e) => {
                console.log("Land area changed:", e.target.value);
                setLandArea(e.target.value);
              }}
              placeholder="Enter land area in square meters"
              min="1"
              required
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="floweringTime">
              Expected Flowering Time (years)
            </Label>
            <Input
              id="floweringTime"
              type="number"
              value={floweringTime}
              onChange={(e) => {
                console.log("Flowering time changed:", e.target.value);
                setFloweringTime(e.target.value);
              }}
              placeholder="Enter maximum years to wait for flowering"
              min="1"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-forest-600 hover:bg-forest-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Getting Recommendations..."
              : "Get Recommendations"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TreeRecommendationForm;
