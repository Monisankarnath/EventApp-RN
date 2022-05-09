import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from '@env';

const url = 'https://api.openweathermap.org/data/2.5/weather';
export const fetchWeather = async param => {
  const config = param?.name
    ? {
        params: {
          q: param.name,
          units: 'metric',
          appid: OPEN_WEATHER_API_KEY,
        },
      }
    : {
        params: {
          lat: param?.latitude,
          lon: param?.longitude,
          units: 'metric',
          appid: OPEN_WEATHER_API_KEY,
        },
      };
  const {data} = await axios.get(url, config);

  return data;
};
