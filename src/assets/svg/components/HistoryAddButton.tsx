import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgHistoryAddButton = (props: SvgProps) => (
  <Svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={40} cy={36} r={28} fill="url(#b)" />
    </G>
    <Path
      d="M40.07 29.687v14.781M32.679 37.077H47.46"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(82.801 17.231 34.775) scale(50.5502)"
      >
        <Stop stopColor="#FFE1E0" />
        <Stop offset={1} stopColor="#E1F6F4" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgHistoryAddButton;
