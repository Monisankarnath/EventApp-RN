import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, useColorMode} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './constants/screenNames';
import BottomTabNav from './routes/BottomTabNav';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const {colorMode} = useColorMode();
  const bgColor = colorMode === 'dark' ? '#003F5E' : '#E3F2F9';
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
