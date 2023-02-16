import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React from "react";
import colors from "@/styles/colors";

interface IAvatar extends ViewProps {
  source: ImageSourcePropType;
  style?: ViewStyle;
  size?: number;
  borderColor?: string;
}

const Avatar: React.FC<IAvatar> = ({
  style = {},
  source,
  size = 64,
  borderColor = colors.Primary,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={{
        ...style,
        borderColor: borderColor,
        height: size,
        width: size,
        borderWidth: 2,
        borderRadius: size / 2,
      }}
    >
      <Image
        source={source}
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
};

export default Avatar;
