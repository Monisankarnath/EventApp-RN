import {VStack} from 'native-base';
import React from 'react';
import {HomeHeader, WeatherWidget} from '../../components';
import {useFetchWeatherData} from '../../hooks/useFetchWeatherData';

const HomeScreen = () => {
  const {weatherData, loading, fetchWeatherData} = useFetchWeatherData();
  return (
    <VStack variant="container">
      <HomeHeader fetchWeatherData={fetchWeatherData} />
      <WeatherWidget weatherData={weatherData} loading={loading} />
    </VStack>
  );
};

export default HomeScreen;
