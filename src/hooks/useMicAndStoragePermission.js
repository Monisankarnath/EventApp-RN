import {useEffect} from 'react';
import {Platform, Alert, BackHandler} from 'react-native';
import {confirmMicPermission, confirmStoragePermission} from '../utils/';

export const useMicAndStoragePermission = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      (async () => {
        try {
          await confirmMicPermission();
          await confirmStoragePermission();
        } catch (error) {
          Alert.alert('Cannot continue without the permissions.', '', [
            {text: 'Confirm', onPress: BackHandler.exitApp},
          ]);
        }
      })();
    }
  }, []);
};
