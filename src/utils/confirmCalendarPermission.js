import {PermissionsAndroid} from 'react-native';

export const confirmCalendarPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Calendar');
    } else {
      throw new Error('Calendar permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
