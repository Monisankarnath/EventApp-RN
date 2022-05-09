import {useEffect} from 'react';
import {Platform, Alert, BackHandler} from 'react-native';
import {confirmCalendarPermission, confirmLocationPermission} from '../utils/';

export const useLocationAndCalendarPermission = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      (async () => {
        try {
          await confirmLocationPermission();
          await confirmCalendarPermission();
        } catch (error) {
          Alert.alert('Cannot continue without the permissions.', '', [
            {text: 'Confirm', onPress: BackHandler.exitApp},
          ]);
        }
      })();
    }
  }, []);
};
