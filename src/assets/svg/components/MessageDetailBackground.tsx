import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";
const SvgMessageDetailBackground = (props: SvgProps) => (
  <Svg
    viewBox="0 0 375 716"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={9.559}
      y={4.748}
      width={357.309}
      height={255.727}
      rx={34}
      fill="#E1F6F4"
    />
    <Rect
      x={-286.293}
      y={385.984}
      width={472.739}
      height={464.84}
      rx={151.5}
      transform="rotate(-45 -286.293 385.984)"
      stroke="#fff"
    />
    <Rect
      x={-254.293}
      y={334.984}
      width={472.739}
      height={464.84}
      rx={151.5}
      transform="rotate(-45 -254.293 334.984)"
      stroke="#fff"
    />
  </Svg>
);
export default SvgMessageDetailBackground;
