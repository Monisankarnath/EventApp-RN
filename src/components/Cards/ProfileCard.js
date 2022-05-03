import React from 'react';
import {VStack, Text, Avatar} from 'native-base';

export const ProfileCard = () => {
  return (
    <VStack alignItems="center" space={2}>
      <Avatar
        bg="cyan.500"
        size="xl"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}>
        CD
      </Avatar>
      <Text color="black.500" fontFamily="crimson" size="semi" fontWeight={200}>
        Carver Dirk
      </Text>
    </VStack>
  );
};
