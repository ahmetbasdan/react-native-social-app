import { FlatList, ScrollView, StyleSheet, View, LogBox } from "react-native";
import React, { useEffect } from "react";
import {
  Container,
  Header,
  Space,
  Avatar,
  Text,
  PostCard,
  Icon,
} from "@/components/toolbox";
import { HistoryAddButton, HomeBackground } from "@/assets/svg/components";
import historyDummyData from "@/dummyData/historyDummyData";
import postDummyData from "@/dummyData/postDummyData";
import helper from "@/styles/helper";

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <Container>
      <View style={styles.background}>
        <HomeBackground />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Socialy"
          rigthContet={<Icon name="notify" size={18} />}
        />
        <Space s6 />
        <Text type="h2Bold" style={styles.title}>
          Feed
        </Text>
        <Space s16 />

        {/* Stories */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={historyDummyData}
          horizontal={true}
          renderItem={({ item }) => (
            <Avatar source={{ uri: item }} style={styles.storyAvatar} />
          )}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={<HistoryAddButton height={64} width={64} />}
        />
        <Space s16 />

        {/* Posts */}

        <FlatList
          contentContainerStyle={styles.content}
          scrollEnabled={false}
          data={postDummyData}
          renderItem={({ item }) => (
            <>
              <PostCard {...item} />
              <Space />
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  storyAvatar: {
    marginRight: 12,
  },
  content: {
    alignItems: "center",
  },
  title: {
    marginHorizontal: helper.pagePaddingHorizontal.paddingHorizontal,
  },
});
