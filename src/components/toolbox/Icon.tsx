import { Image, ImageStyle } from "react-native";
import React from "react";
import icons from "@/utils/constants/icons";
import { iconType } from "@/types";


interface IICon {
  name: iconType;
  size?: number;
  color?: string;
  style?: ImageStyle;
}

const Icon: React.FC<IICon> = ({
  name,
  color = "#000000",
  size = 16,
  style = {},
}) => {
  return (
    <Image
      source={icons[name]}
      style={{
        ...style,
        tintColor: color,
        width: size,
        height: size,
      }}
      resizeMode="contain"
    />
  );
};

export default Icon;
