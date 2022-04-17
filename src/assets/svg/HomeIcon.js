import React from 'react';
import Svg, {Path} from 'react-native-svg';
export const HomeIcon = ({size, color}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M24 12.75L26.295 15.045L24.705 16.635L15 6.93L5.295 16.635L3.705 15.045L15 3.75L21 9.75V6.75H24V12.75ZM15 9.06L24 18.045V27H6V18.045L15 9.06ZM18 25.5V18H12V25.5H18Z"
        fill={color}
      />
    </Svg>
  );
};
