import {
  Text as BaseText,
  TextProps,
  TextStyle,
} from "react-native";
import React from "react";
import fonts from "@/styles/fonts";
import colors from "@/styles/colors";

type styleType =
  | "title"
  | "h1"
  | "h2Bold"
  | "h2Regular"
  | "h3"
  | "boydRegular"
  | "boydSmall"
  | "caption"
  | "buttonRegular"
  | "buttonLarge";

interface IText extends TextProps {
  type?: styleType;
  style?: TextStyle;
  color?: "Dark" | "White";
}

const Text: React.FC<IText> = ({
  type = "title",
  style = {},
  color = "Dark",
  ...rest
}) => {
  return (
    <BaseText
      {...rest}
      style={{ ...fonts.style[type], color: colors[color], ...style }}
    ></BaseText>
  );
};

export default Text;
