import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { Text } from "../toolbox";

interface IMessageBox {
  text: string;
  position: "left" | "right";
}

const MessageBox: React.FC<IMessageBox> = ({ position, text }) => {
  const customBorderRadius: ViewStyle =
    position == "left"
      ? { borderTopLeftRadius: 0, alignSelf: "flex-start" }
      : { borderTopRightRadius: 0, alignSelf: "flex-end" };

  const customPaddingText: TextStyle =
    position == "left"
      ? {
          textAlign: "left",
          paddingLeft: 6,
        }
      : { paddingRight: 6, textAlign: "right" };

  return (
    <View style={{ ...styles.container, ...customBorderRadius }}>
      <Text style={customPaddingText} type="caption">
        {text}
      </Text>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    borderRadius: 15,
    width: "60%",
    padding: 6,
  },
});
