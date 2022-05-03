import React from 'react';
import {HStack, Pressable} from 'native-base';
import {StyleSheet} from 'react-native';
import {SCREEN_NAMES} from '../../constants/screenNames';
import VIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadialGradient from 'react-native-radial-gradient';
import {Bump} from '../../assets';

const TabBarButton = props => {
  const {onPress, accessibilityState, route} = props;
  let focused = accessibilityState.selected;
  let color = focused ? '#fff' : '#7C7C7C';
  let icon;
  switch (route.name) {
    case SCREEN_NAMES.HOME_SCREEN:
      icon = <VIcon name="home" size={24} color={color} />;
      break;
    case SCREEN_NAMES.CALENDAR_SCREEN:
      icon = <VIcon name="calendar" size={20} color={color} />;
      break;
    case SCREEN_NAMES.ADD_SCREEN:
      icon = <MIcon name="calendar-week" size={24} color={color} />;
      break;

    default:
      break;
  }
  return (
    <Pressable {...props} onPress={onPress}>
      <HStack flex={1} justifyContent="center" alignItems="center">
        {focused ? (
          <HStack
            w="100%"
            position="absolute"
            bottom={0}
            justifyContent="center">
            <Bump />
          </HStack>
        ) : null}
        {focused ? (
          <HStack justifyContent="center" alignItems="center">
            <RadialGradient
              style={styles.radial}
              colors={['#A5A5A5']}
              center={[20, 20]}
              radius={20}>
              {icon}
            </RadialGradient>
          </HStack>
        ) : (
          icon
        )}
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  textShadow: {
    // textShadowColor: 'rgba(275, 275, 275, 0.6)',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 25,
  },
  radial: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TabBarButton;
