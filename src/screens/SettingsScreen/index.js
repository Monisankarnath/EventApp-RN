import {StyleSheet} from 'react-native';
import React from 'react';
import {VStack} from 'native-base';
import {Header, ProfileCard, SettingsCard} from '../../components/';
import LinearGradient from 'react-native-linear-gradient';

const SettingsScreen = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.screenContainer}
      colors={['#262B2E', '#141718']}>
      <VStack>
        <Header />
        <ProfileCard />
        <SettingsCard />
      </VStack>
    </LinearGradient>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
