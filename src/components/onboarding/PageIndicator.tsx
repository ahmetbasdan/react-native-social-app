import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import colors from "@/styles/colors";

const { height } = Dimensions.get("window");

interface IPageIndicator {
  selectedIndex: number;
  length: number;
}

const PageIndicator: React.FC<IPageIndicator> = ({ length, selectedIndex }) => {
  const array = Array.from({ length: length }).fill(0);

  return (
    <View style={styles.container}>
      {array.map((item, index) => {
        if (selectedIndex == index) {
          return <FillIndicator key={index} />;
        }
        else{
          return <OutlineIndicator key={index} />;
        }

   
      })}
    </View>
  );
};

export default PageIndicator;

const FillIndicator = () => <View style={styles.fillIndicator}></View>;

const OutlineIndicator = () => <View style={styles.outlineIndicator}></View>;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: height * 0.2,
  },
  fillIndicator: {
    backgroundColor: colors.Dark,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  outlineIndicator: {
    borderWidth: 1,
    borderColor: colors.Dark,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginHorizontal: 4,
  },
});
