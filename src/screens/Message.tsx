import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Container, Space } from "@/components/toolbox";
import { MessageDetailBackground } from "@/assets/svg/components";
import messageDummyData from "@/dummyData/messageDummyData";
import { MessageBox, Header,MessageSendBox } from "@/components/message";
import helper from "@/styles/helper";

const Message = () => {
  return (
    <Container>
      <View style={StyleSheet.absoluteFillObject}>
        <MessageDetailBackground />
      </View>

      {/* Header */}
      <Header
        avatarSource={{
          uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
        }}
        title="Mona Hyatt"
        caption="eum aut rem"
      />

      {/* Messages */}
      <FlatList
        ListHeaderComponent={<Space s16 />}
        contentContainerStyle={{
          paddingHorizontal: helper.pagePaddingHorizontal.paddingHorizontal,
        }}
        data={messageDummyData}
        renderItem={({ item, index }) => (
          <>
            <MessageBox
              text={item}
              position={index % 2 == 0 ? "left" : "right"}
            />
            <Space />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Message Send Box */}
      <Space s2/>
      <MessageSendBox/>
      <Space/>
    </Container>
  );
};

export default Message;

const styles = StyleSheet.create({});
