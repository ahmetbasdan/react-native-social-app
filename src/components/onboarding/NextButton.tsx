import {
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Icon, Text } from "@/components/toolbox";
import Colors from "@/styles/colors";
import { NexButtonSecond, NextButtonFirst } from "@/assets/svg/components";

const SIZE = 366;

interface INextButton extends TouchableOpacityProps {
  color?: "DarkColor" | "LightColor";
  style?: ViewStyle;
  contentXOffset?: number;
  contentYOffset?: number;
}

const NextButton: React.FC<INextButton> = ({
  color = "DarkColor",
  style = {},
  contentXOffset = 0,
  contentYOffset = 0,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      {...rest}
      style={{ ...styles.container, ...style }}
    >
      <View style={styles.svg}>
        {color == "DarkColor" ? (
          <NextButtonFirst width={SIZE} height={SIZE} />
        ) : (
          <NexButtonSecond width={SIZE} height={SIZE} />
        )}
      </View>
      <View
        style={{
          ...styles.content,
          transform: [
            { translateX: contentXOffset },
            { translateY: contentYOffset },
          ],
        }}
      >
        <Text
          type="buttonRegular"
          color={color == "DarkColor" ? "White" : "Dark"}
          style={styles.buttonText}
        >
          Next
        </Text>
        <Icon name="nextArrow" size={15} color={color == "LightColor" ? Colors.Dark : Colors.White}  />
      </View>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    zIndex: 99999,
    flexDirection: "row",
    alignItems: "center",
  },
  svg: {
    position: "absolute",
    zIndex: 9,
  },
  buttonText: {
    marginRight: 8,
  },
});
