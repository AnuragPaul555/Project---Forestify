
import React from 'react';
import { useAQIData, getAQIColor } from '../services/api';
import { Card } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { MapPin, AlertCircle, RefreshCw } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const AQIDisplay: React.FC = () => {
  const { aqiData, loading, error, locationAccess } = useAQIData();

  if (loading) {
    return (
      <Card className="p-4 w-full">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center">
            <RefreshCw className="h-5 w-5 mr-2 animate-spin text-forest-600" />
            <span className="text-sm text-gray-600">Fetching air quality data...</span>
          </div>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-10 w-1/2" />
        </div>
      </Card>
    );
  }

  if (error && !aqiData) {
    return (
      <Alert variant="destructive" className="w-full">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!aqiData) return null;

  const { aqi, status, location } = aqiData;
  const aqiColor = getAQIColor(aqi);

  return (
    <Card className="w-full bg-white border-0 shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-forest-600" />
            <div>
              <span className="font-medium text-sm text-gray-600">
                {location.area}, {location.city}, {location.state}
              </span>
              {!locationAccess && (
                <span className="text-xs text-amber-500 block">
                  (Using approximate location)
                </span>
              )}
              {error && (
                <span className="text-xs text-amber-500 block">
                  {error}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-gray-600">AQI:</span>
              <div className={`px-2 py-1 rounded-md ${aqiColor}`}>
                <span className="text-white font-bold">{aqi}</span>
              </div>
            </div>
            <span className="text-sm font-medium">{status}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AQIDisplay;
