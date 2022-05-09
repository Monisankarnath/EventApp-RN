import {PermissionsAndroid} from 'react-native';

export const confirmStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
    if (
      granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.READ_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('Storage Permissions Granted!');
    } else {
      throw new Error('Storage Permission Denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
