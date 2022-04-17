import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN_NAMES} from '../constants/screenNames';
import {AddScreen, CalendarScreen, HomeScreen} from '../screens';
import {TabBarButton} from '../components';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.HOME_SCREEN}
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: '#31374A',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: props => <TabBarButton {...props} route={route} />,
      })}>
      <Tab.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAMES.ADD_SCREEN} component={AddScreen} />
      <Tab.Screen
        name={SCREEN_NAMES.CALENDAR_SCREEN}
        component={CalendarScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
