import {
  Dimensions,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React from "react";
import { OnBoardingBackground } from "@/assets/svg/components";
import colors from "@/styles/colors";

const { width, height } = Dimensions.get("window");

interface IContainer extends ViewProps {
  style?: ViewStyle;
}

const Container: React.FC<IContainer> = ({ children, style = {}, ...rest }) => {
  return (
    <View {...rest} style={{ ...styles.container, ...style }}>
      <View style={StyleSheet.absoluteFillObject}>
        <OnBoardingBackground />
      </View>

      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: width,
    backgroundColor: colors.White,
  },
});
