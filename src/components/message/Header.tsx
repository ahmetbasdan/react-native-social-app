import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Text, Header as BaseHeader } from "../toolbox";
import colors from "@/styles/colors";

interface IHeader {
  avatarSource: ImageSourcePropType;
  title: string;
  caption: string;
}

const Header: React.FC<IHeader> = ({ avatarSource, caption, title }) => {
  return (
    <View style={styles.headerCard}>
      <BaseHeader isBack style={styles.header} />
      <View style={styles.headerCardContent}>
        <Avatar size={75} source={avatarSource} />
        <View style={styles.titleAndCaption}>
          <Text type="h3">{title}</Text>
          <Text type="caption" style={styles.caption}>
            {caption}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCard: {
    height: 270,
    width: "95%",
    marginTop: 24,
    borderRadius: 34,
    alignSelf: "center",
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  headerCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleAndCaption: {
    marginLeft: 16,
  },
  caption: {
    color: colors.Dark50,
  },
});
