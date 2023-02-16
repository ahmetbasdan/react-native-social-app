import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";
const SvgProfileBackground = (props: SvgProps) => (
  <Svg
    viewBox="0 0 375 519"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={-137.187}
      y={189.578}
      width={472.739}
      height={464.84}
      rx={151.5}
      transform="rotate(-45 -137.187 189.578)"
      stroke="#EEF2E2"
    />
    <Rect
      x={-137.187}
      y={144.984}
      width={472.739}
      height={464.84}
      rx={151.5}
      transform="rotate(-45 -137.187 144.984)"
      stroke="#EEF2E2"
    />
    <Rect
      x={-137.894}
      y={95.984}
      width={473.739}
      height={465.84}
      rx={152}
      transform="rotate(-45 -137.894 95.984)"
      fill="#E1F6F4"
    />
  </Svg>
);
export default SvgProfileBackground;
