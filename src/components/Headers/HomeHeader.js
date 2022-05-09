import React from 'react';
import {StyleSheet} from 'react-native';
import {HStack, Pressable, Text} from 'native-base';
import VIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useColorMode} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constants/screenNames';

export const HomeHeader = ({fetchWeatherData}) => {
  const navigation = useNavigation();
  const handleSettingButton = () => {
    navigation.navigate(SCREEN_NAMES.SETTINGS_SCREEN, fetchWeatherData);
  };
  const {colorMode} = useColorMode();
  return (
    <HStack justifyContent="space-between" alignItems="center" py={4}>
      <Text variant="heading" fontFamily="crimson" fontWeight={300} size="semi">
        my day
      </Text>
      <Pressable onPress={handleSettingButton}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.buttonContainer}
          colors={['#DBE0E7', '#F8FBFF']}>
          <VIcon
            name="ios-settings-outline"
            color={colorMode === 'light' ? '#535572' : '#181725'}
            size={16}
          />
        </LinearGradient>
      </Pressable>
    </HStack>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 36,
    height: 36,
    elevation: 10,
  },
});
