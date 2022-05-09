import {PermissionsAndroid} from 'react-native';

export const confirmLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location!');
    } else {
      throw new Error('Location Permission Denied!');
    }
  } catch (error) {
    console.warn(error);
  }
};
