
import { useState, useEffect } from 'react';

export interface AQIData {
  aqi: number;
  status: string;
  location: {
    area: string;
    city: string;
    state: string;
  };
}

// Cache for AQI data to prevent refetching on each page navigation
let cachedAQIData: AQIData | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

// Reverse geocoding to get location details from coordinates
const getLocationDetails = async (lat: number, lon: number): Promise<{area: string, city: string, state: string}> => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch location details');
    }
    
    const data = await response.json();
    const address = data.address;

    // Extract relevant location information
    const area = address.suburb || address.neighbourhood || address.hamlet || address.village || 'Unknown Area';
    const city = address.city || address.town || address.county || 'Unknown City';
    const state = address.state || 'Unknown State';
    
    return { area, city, state };
  } catch (error) {
    console.error('Error getting location details:', error);
    return { area: 'Unknown Area', city: 'Unknown City', state: 'Unknown State' };
  }
};

// Get AQI data from the WAQI API
const fetchAQIData = async (lat: number, lon: number): Promise<AQIData> => {
  try {
    // Use free AQI API (World Air Quality Index)
    const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=demo`);
    if (!response.ok) {
      throw new Error('Failed to fetch AQI data');
    }

    const data = await response.json();
    const aqi = data.data.aqi || 0;

    // Get location details
    const location = await getLocationDetails(lat, lon);
    
    // Determine AQI status based on value
    let status = '';
    if (aqi <= 50) status = 'Good';
    else if (aqi <= 100) status = 'Moderate';
    else if (aqi <= 150) status = 'Unhealthy for Sensitive Groups';
    else if (aqi <= 200) status = 'Unhealthy';
    else if (aqi <= 300) status = 'Very Unhealthy';
    else status = 'Hazardous';
    
    return {
      aqi,
      status,
      location
    };
  } catch (error) {
    console.error('Error fetching AQI data:', error);
    throw error;
  }
};

// Fallback to simulated AQI data if real API fails
const simulateAQIData = (latitude: number, longitude: number): AQIData => {
  // Generate a random AQI value between 20 and 150
  const aqi = Math.floor(Math.random() * 130) + 20;
  
  // Determine AQI status based on value
  let status = '';
  if (aqi <= 50) status = 'Good';
  else if (aqi <= 100) status = 'Moderate';
  else if (aqi <= 150) status = 'Unhealthy for Sensitive Groups';
  else if (aqi <= 200) status = 'Unhealthy';
  else if (aqi <= 300) status = 'Very Unhealthy';
  else status = 'Hazardous';

  // More realistic location selection based on approximate coordinates
  let location = { area: "Unknown Area", city: "Unknown City", state: "Unknown State" };
  
  // North India
  if (latitude > 28 && longitude > 75) {
    location = { area: "Connaught Place", city: "New Delhi", state: "Delhi" };
  } 
  // West India
  else if (latitude < 23 && longitude < 75) {
    location = { area: "Powai", city: "Mumbai", state: "Maharashtra" };
  } 
  // East India
  else if (latitude < 25 && longitude > 85) {
    location = { area: "Salt Lake", city: "Kolkata", state: "West Bengal" };
  } 
  // South India
  else if (latitude < 15) {
    location = { area: "T Nagar", city: "Chennai", state: "Tamil Nadu" };
  } 
  // Central/Default
  else {
    location = { area: "Jayanagar", city: "Bengaluru", state: "Karnataka" };
  }
  
  return {
    aqi,
    status,
    location
  };
};

export const useAQIData = () => {
  const [aqiData, setAqiData] = useState<AQIData | null>(cachedAQIData);
  const [loading, setLoading] = useState(!cachedAQIData);
  const [error, setError] = useState<string | null>(null);
  const [locationAccess, setLocationAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // If cache is valid, use it
      const now = Date.now();
      if (cachedAQIData && (now - lastFetchTime) < CACHE_DURATION) {
        setAqiData(cachedAQIData);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Request user location
        if (navigator.geolocation) {
          navigator.permissions.query({ name: 'geolocation' }).then(async (result) => {
            if (result.state === 'granted' || result.state === 'prompt') {
              setLocationAccess(true);
              
              navigator.geolocation.getCurrentPosition(
                async (position) => {
                  console.log("Got position:", position.coords.latitude, position.coords.longitude);
                  
                  try {
                    // Try to get real AQI data
                    const data = await fetchAQIData(position.coords.latitude, position.coords.longitude);
                    
                    // Update cache
                    cachedAQIData = data;
                    lastFetchTime = Date.now();
                    
                    setAqiData(data);
                    setLoading(false);
                  } catch (fetchError) {
                    console.error("Error fetching real AQI data, falling back to simulation:", fetchError);
                    
                    // Fallback to simulated data
                    const data = simulateAQIData(position.coords.latitude, position.coords.longitude);
                    
                    // Update cache
                    cachedAQIData = data;
                    lastFetchTime = Date.now();
                    
                    setAqiData(data);
                    setError('Could not fetch real AQI data. Using estimated data.');
                    setLoading(false);
                  }
                },
                (positionError) => {
                  console.error("Error getting location:", positionError);
                  setError('Could not get your location. Using default data.');
                  
                  // Use default data for a generic location
                  const data = simulateAQIData(28.6, 77.2);
                  
                  // Update cache
                  cachedAQIData = data;
                  lastFetchTime = Date.now();
                  
                  setAqiData(data);
                  setLoading(false);
                }
              );
            } else {
              setLocationAccess(false);
              setError('Location access denied. Using default data.');
              
              // Use default data for a generic location
              const data = simulateAQIData(28.6, 77.2);
              
              // Update cache
              cachedAQIData = data;
              lastFetchTime = Date.now();
              
              setAqiData(data);
              setLoading(false);
            }
          });
        } else {
          setLocationAccess(false);
          setError('Geolocation is not supported by your browser. Using default data.');
          
          // Use default data for a generic location
          const data = simulateAQIData(28.6, 77.2);
          
          // Update cache
          cachedAQIData = data;
          lastFetchTime = Date.now();
          
          setAqiData(data);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error in AQI data flow:', err);
        setError('Failed to fetch AQI data. Using default data.');
        
        // Use default data for a generic location
        const data = simulateAQIData(28.6, 77.2);
        
        // Update cache
        cachedAQIData = data;
        lastFetchTime = Date.now();
        
        setAqiData(data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { aqiData, loading, error, locationAccess };
};

// Function to determine AQI color based on value
export const getAQIColor = (aqi: number): string => {
  if (aqi <= 50) return 'bg-green-500';
  if (aqi <= 100) return 'bg-yellow-400';
  if (aqi <= 150) return 'bg-orange-500';
  if (aqi <= 200) return 'bg-red-500';
  if (aqi <= 300) return 'bg-purple-600';
  return 'bg-red-900';
};
