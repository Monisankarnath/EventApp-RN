import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useLocationAndCalendarPermission} from './src/hooks/useLocationAndCalendarPermission';
import {useMicAndStoragePermission} from './src/hooks/useMicAndStoragePermission';
import RootNavigator from './src/RootNavigator';
import {customTheme} from './src/theme';

const App = () => {
  useLocationAndCalendarPermission();
  useMicAndStoragePermission();
  return (
    <NativeBaseProvider theme={customTheme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
