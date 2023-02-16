import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Text } from "@/components/toolbox";
import colors from "@/styles/colors";
import { ConversationDataType } from "@/types";

const ConversationItem: React.FC<ConversationDataType> = ({
  avatarUrl,
  fullName,
  lastMessage,
  onPress
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
      <View style={styles.leftContent}>
        <Avatar
          source={{
            uri: avatarUrl,
          }}
          borderColor={colors.Dark}
        />
      </View>
      <View style={styles.rightContent}>
        <Text type="boydSmall">{fullName}</Text>
        <Text type="boydSmall" style={{ color: colors.Dark40 }}>
          {lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationItem;

const styles = StyleSheet.create({
  container: {
    height: 103,
    borderRadius: 33,
    flexDirection: "row",
    backgroundColor: colors.White60,
    paddingHorizontal: 12,
  },
  leftContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightContent: {
    flex: 4,
    justifyContent: "center",
    paddingLeft: 16,
  },
});
