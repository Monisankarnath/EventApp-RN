import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/RootNavigator';
import {customTheme} from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
