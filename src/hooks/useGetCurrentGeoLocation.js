import {useState, useEffect} from 'react';
import GetLocation from 'react-native-get-location';
export const useGetCurrentGeoLocation = () => {
  const [location, setLocation] = useState({});
  const [locationError, setLocationError] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const data = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      });
      setLocation(data);
    } catch (error) {
      setLocationError(error);
    }
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return {location, locationError};
};
