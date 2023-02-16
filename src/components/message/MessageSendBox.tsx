import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SendMessageButton } from "@/assets/svg/components";
import colors from "@/styles/colors";

const { width } = Dimensions.get("window");

const MessageSendBox = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 4,
            paddingLeft: 46,

            justifyContent: "center",
          }}
        >
          <TextInput placeholder="Write a message..." style={{}} multiline />
        </View>

        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <SendMessageButton height={80} width={80} />
        </View>
      </View>
    </View>
  );
};

export default MessageSendBox;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width * 0.85,
    borderRadius: 39,
    backgroundColor: colors.White,
    justifyContent: "center",
    alignSelf: "center",

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
});
