import React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
export const AddButtonIcon = () => {
  return (
    <Svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="42" cy="42" r="30" fill="white" />
      <Circle cx="42" cy="42" r="25" fill="url(#paint0_linear_11_35)" />
      <Path
        d="M41.875 20C36.095 20.0697 30.5715 22.3968 26.4841 26.4841C22.3968 30.5715 20.0697 36.095 20 41.875C20.0697 47.655 22.3968 53.1785 26.4841 57.2659C30.5715 61.3532 36.095 63.6803 41.875 63.75C47.655 63.6803 53.1785 61.3532 57.2659 57.2659C61.3532 53.1785 63.6803 47.655 63.75 41.875C63.6803 36.095 61.3532 30.5715 57.2659 26.4841C53.1785 22.3968 47.655 20.0697 41.875 20ZM54.375 43.4375H43.4375V54.375H40.3125V43.4375H29.375V40.3125H40.3125V29.375H43.4375V40.3125H54.375V43.4375Z"
        fill="url(#paint1_linear_11_35)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_11_35"
          x1="26.5"
          y1="26.5"
          x2="52"
          y2="58.5"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="white" />
          <Stop offset="1" stop-color="#D8D8D8" stop-opacity="0.5" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_11_35"
          x1="29"
          y1="25"
          x2="56"
          y2="60.5"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#985EE1" />
          <Stop offset="1" stop-color="#F25656" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
