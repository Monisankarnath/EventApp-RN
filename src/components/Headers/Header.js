import React from 'react';
import {ChevronLeftIcon, HStack, IconButton} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();
  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <HStack justifyContent="space-between" alignItems="center" py={4}>
      <IconButton
        w={8}
        h={8}
        justifyContent="center"
        alignItems="center"
        onPress={handleBackButton}
        icon={<ChevronLeftIcon size={8} color="black.100" />}
      />
    </HStack>
  );
};
