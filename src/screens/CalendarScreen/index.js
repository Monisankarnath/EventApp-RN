import {VStack} from 'native-base';
import VIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const CalendarScreen = () => {
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="primary.50">
      <VIcon name="calendar" color="#F25656" size={30} />
    </VStack>
  );
};

export default CalendarScreen;
