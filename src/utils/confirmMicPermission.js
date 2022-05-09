import {PermissionsAndroid} from 'react-native';

export const confirmMicPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Mic');
    } else {
      throw new Error('Audio Recording permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
