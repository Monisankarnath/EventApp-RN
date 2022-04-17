import React, {useState, useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Pressable, VStack} from 'native-base';

const AddScreen = () => {
  const [toggled, setToggled] = useState(false);
  const animation = useRef(null);
  const isFirstClicked = useRef(true);
  const clicked = () => {
    setToggled(!toggled);
  };
  useEffect(() => {
    if (isFirstClicked.current) {
      if (toggled) {
        animation.current.play(36, 36);
      } else {
        animation.current.play(62, 62);
      }
      isFirstClicked.current = false;
    } else if (toggled) {
      animation.current.play(0, 36);
    } else {
      animation.current.play(36, 0);
    }
  }, [toggled]);
  return (
    <VStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="primary.50">
      <Pressable onPress={clicked} h={100} w={100}>
        <LottieView
          ref={animation}
          loop={false}
          autoPlay={false}
          source={require('../../assets/animations/lottie/add.json')}
        />
      </Pressable>
    </VStack>
  );
};

export default AddScreen;
