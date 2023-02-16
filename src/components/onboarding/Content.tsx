import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Space, Text } from "@/components/toolbox";

import { onboardingDataType } from "@/types";

const { width } = Dimensions.get("window");

const IMAGE_SIZE = width * 0.5;

const Content: React.FC<onboardingDataType> = ({
  subTitle,
  title,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} type="boydRegular">
        {subTitle}
      </Text>
      <Text style={styles.text} type="h1">
        {title}
      </Text>
      <Space s24 />
      <View>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
      <Space s32 />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  text: {
    textAlign: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
