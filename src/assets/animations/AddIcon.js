import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {VStack} from 'native-base';
import React, {useRef, useEffect} from 'react';

export const AddIcon = ({focused}) => {
  const animation = useRef(null);
  const isFirstClicked = useRef(true);
  useEffect(() => {
    if (isFirstClicked.current) {
      if (focused) {
        animation.current.play(37, 37);
      } else {
        animation.current.play(0, 0);
      }
      isFirstClicked.current = false;
    } else if (focused) {
      animation.current.play(0, 37);
    } else {
      animation.current.play(37, 0);
    }
  }, [focused]);
  return (
    <VStack
      h={60}
      w={60}
      borderRadius="30"
      position="absolute"
      bottom="5"
      bg="background.100"
      alignItems="center"
      justifyContent="center">
      <LottieView
        style={styles.lottieContainer}
        ref={animation}
        loop={false}
        autoPlay={false}
        source={require('./lottie/add.json')}
      />
    </VStack>
  );
};
const styles = StyleSheet.create({
  lottieContainer: {
    height: 58,
    width: 58,
  },
});
