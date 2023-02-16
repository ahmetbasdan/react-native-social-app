import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgAddButton = (props: SvgProps) => (
  <Svg
    viewBox="0 0 92 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        x={3}
        y={42.613}
        width={60.264}
        height={61.966}
        rx={23}
        transform="rotate(-45 3 42.613)"
        fill="#000"
      />
    </G>
    <Path
      d="M47.215 38.215h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4Zm-1-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
      fill="#fff"
    />
    <Defs></Defs>
  </Svg>
);
export default SvgAddButton;
