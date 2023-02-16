import { View, Text } from "react-native";
import React from "react";
import { iconType } from "@/types";
import { Icon } from "@/components/toolbox";
import colors from "@/styles/colors";

interface IIconItem {
  focused: boolean;
  name: iconType;
  size: number;
}

const IconItem: React.FC<IIconItem> = ({ name, focused, size }) => {
  return (
    <Icon
      name={name}
      size={size}
      color={focused ? colors.Primary : colors.Dark}
    />
  );
};

export default IconItem;
