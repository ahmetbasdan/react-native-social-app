import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Container,
  Header,
  Icon,
  Space,
  Text,
} from "@/components/toolbox";
import { MessageBackground, SendMessageButton } from "@/assets/svg/components";
import helper from "@/styles/helper";
import { SearchBox, ConversationItem } from "@/components/Conversations";
import conversationDummData from "@/dummyData/conversationDummData";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";

const { height, width } = Dimensions.get("window");
const Conversations = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToMessage = () => navigation.navigate("Message");

  return (
    <Container>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <MessageBackground />
      </View>

      {/* Header */}
      <Header isBack rigthContet={<Icon name="menu" size={24} />} />
      <Space s16 />
      <Text type="h2Bold" style={helper.pagePaddingHorizontal}>
        Messages
      </Text>
      <Space s16 />

      {/* SearchBox */}
      <SearchBox />

      {/* Messages List */}
      <FlatList
        ListHeaderComponent={<Space s12 />}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={conversationDummData}
        renderItem={({ item }) => (
          <>
            <ConversationItem onPress={goToMessage} {...item} />
            <Space s8 />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity onPress={goToMessage} >
        <View style={styles.svgIcon}>
          <SendMessageButton width={100} height={100} />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default Conversations;

const styles = StyleSheet.create({
  box: {
    alignSelf: "center",
    transform: [
      { scale: 1.5 },
      { rotate: "45deg" },
      { translateY: height * 0.25 },
      { translateX: width * 0.3 },
    ],
  },
  svgIcon: {
    position: "absolute",
    bottom: 32,
    alignSelf: "center",
  },
  flatList: {
    paddingHorizontal: helper.pagePaddingHorizontal.paddingHorizontal,
  },
});
