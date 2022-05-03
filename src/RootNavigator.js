import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {StatusBar, useColorMode} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './constants/screenNames';
import BottomTabNav from './routes/BottomTabNav';
import {SettingsScreen} from './screens';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const {colorMode} = useColorMode();
  const bgColor = '#EFF1F5';

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bgColor}]}>
      <StatusBar
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN_NAMES.ROOT_TAB}
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
          }}>
          <Stack.Screen name={SCREEN_NAMES.ROOT_TAB} component={BottomTabNav} />
          <Stack.Screen
            name={SCREEN_NAMES.SETTINGS_SCREEN}
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
