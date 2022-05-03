import {VStack} from 'native-base';
import React from 'react';
import {HomeHeader, WeatherWidget} from '../../components';

const HomeScreen = () => {
  return (
    <VStack variant="container">
      <HomeHeader />
      <WeatherWidget />
    </VStack>
  );
};

export default HomeScreen;
