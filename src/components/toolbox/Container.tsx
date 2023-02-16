import { View, StyleSheet, ViewStyle, ViewProps } from "react-native";
import React from "react";
import Constants from "expo-constants";
import colors from "@/styles/colors";

interface IContainer extends ViewProps {
  style?: ViewStyle;
}

const Container: React.FC<IContainer> = ({ style = {}, children, ...rest }) => {
  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor:colors.White
  },
});
