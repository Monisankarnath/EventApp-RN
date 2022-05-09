import {useState, useEffect, useCallback} from 'react';
import {fetchWeather} from '../controllers/fetchWeather';
import {useGetCurrentGeoLocation} from './useGetCurrentGeoLocation';

export const useFetchWeatherData = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);
  const {location, locationError} = useGetCurrentGeoLocation();

  const fetchWeatherData = useCallback(
    async props => {
      setLoading(true);
      const param = props ?? location;
      try {
        const data = await fetchWeather(param);
        setWeatherData(data);
      } catch (error) {
        setWeatherError(error);
      }
      setLoading(false);
    },
    [location],
  );
  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);
  return {weatherData, loading, weatherError, locationError, fetchWeatherData};
};
