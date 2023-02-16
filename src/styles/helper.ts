import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  pagePaddingHorizontal: {
    paddingHorizontal: width * 0.05,
  },
});
