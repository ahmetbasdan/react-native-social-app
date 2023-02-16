import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgSendMessageButton = (props: SvgProps) => (
  <Svg
    viewBox="0 0 95 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={61.107}
        height={62.833}
        rx={23}
        transform="scale(1.0136 .9862) rotate(-45 53.638 18.032)"
        fill="#000"
      />
    </G>
    <Path
      d="m57.012 35.392-11.306 11M57.012 35.392l-7.195 20-4.11-9-9.25-4 20.555-7Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
);
export default SvgSendMessageButton;
