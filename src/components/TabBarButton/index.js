import React from 'react';
import {HStack, Pressable} from 'native-base';
import {StyleSheet} from 'react-native';
import {SCREEN_NAMES} from '../../constants/screenNames';
import VIcon from 'react-native-vector-icons/FontAwesome';
import {AddIcon, HomeIcon} from '../../assets';
import LinearGradient from 'react-native-linear-gradient';

const TabBarButton = props => {
  const {onPress, accessibilityState, route} = props;
  let focused = accessibilityState.selected;
  let size = focused ? 28 : 24;
  let color = focused ? '#fff' : '#979EFF';
  let icon;
  switch (route.name) {
    case SCREEN_NAMES.HOME_SCREEN:
      size = accessibilityState.selected ? 32 : 30;
      icon = <HomeIcon color={color} size={size} />;
      break;
    case SCREEN_NAMES.CALENDAR_SCREEN:
      icon = <VIcon name="calendar" color={color} size={size} />;
      break;
    case SCREEN_NAMES.ADD_SCREEN:
      icon = <AddIcon focused={focused} />;
      break;

    default:
      break;
  }
  return (
    <Pressable {...props} onPress={onPress}>
      <HStack flex={1} alignItems="center" justifyContent="center">
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.innerGradient}
          colors={['#535572', '#31374A']}>
          {icon}
        </LinearGradient>
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  outerGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerGradient: {
    width: 60,
    height: 60,
    flex: 1,
    // borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TabBarButton;
