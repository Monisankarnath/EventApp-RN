import React from 'react';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const AddButton = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="30" cy="30" r="30" fill="white" />
      <Circle cx="30" cy="30" r="25" fill="url(#paint0_linear_30_24)" />
      <Path
        d="M29.875 8C24.095 8.06973 18.5715 10.3968 14.4841 14.4841C10.3968 18.5715 8.06973 24.095 8 29.875C8.06973 35.655 10.3968 41.1785 14.4841 45.2659C18.5715 49.3532 24.095 51.6803 29.875 51.75C35.655 51.6803 41.1785 49.3532 45.2659 45.2659C49.3532 41.1785 51.6803 35.655 51.75 29.875C51.6803 24.095 49.3532 18.5715 45.2659 14.4841C41.1785 10.3968 35.655 8.06973 29.875 8ZM42.375 31.4375H31.4375V42.375H28.3125V31.4375H17.375V28.3125H28.3125V17.375H31.4375V28.3125H42.375V31.4375Z"
        fill="url(#paint1_linear_30_24)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_30_24"
          x1="14.5"
          y1="14.5"
          x2="40"
          y2="46.5"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="white" />
          <Stop offset="1" stop-color="#D8D8D8" stop-opacity="0.5" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_30_24"
          x1="17"
          y1="13"
          x2="44"
          y2="48.5"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#985EE1" />
          <Stop offset="1" stop-color="#F25656" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
