import {VStack} from 'native-base';
import React from 'react';
import {HomeIcon} from '../../assets';

const HomeScreen = () => {
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="primary.50">
      <HomeIcon color="#F25656" size="50" />
    </VStack>
  );
};

export default HomeScreen;
