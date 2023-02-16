import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Container, Header, Icon, Space, Text } from "@/components/toolbox";
import { ProfileBackground } from "@/assets/svg/components";
import images from "@/utils/constants/images";
import profilePostDummyData from "@/dummyData/profilePostDummyData";
import { MasonryFlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");

const Profile = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <ProfileBackground />
        </View>
        <Header isBack />
        <Space s24 />
        <View style={styles.profileInfoContent}>
          <Image source={images.profilImage} style={styles.avatar} />
          <Text type="h2Bold">John Doe</Text>
          <Text type="boydRegular">@johndoe</Text>
        </View>

        <Space s32 />
        <View style={styles.profileStateContainer}>
          <View style={styles.profileStateItem}>
            <Text type="boydSmall">Posts</Text>
            <Text type="h2Bold">35</Text>
          </View>
          <View style={styles.profileStateItem}>
            <Text type="boydSmall">Followers</Text>
            <Text type="h2Bold">1,552</Text>
          </View>
          <View style={styles.profileStateItem}>
            <Text type="boydSmall">Follow</Text>
            <Text type="h2Bold">128</Text>
          </View>
        </View>

        <Space s32 />

        <View style={styles.tabContainer}>
          <View style={styles.tabItem}>
            <Icon name="galery" size={24} />
          </View>
          <View style={styles.tabItem}>
            <Icon name="saved" size={24} />
          </View>
        </View>

        <MasonryFlashList
          scrollEnabled={false}
          data={profilePostDummyData}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Image source={item} resizeMode="cover" />
              <Space s6 />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          estimatedItemSize={100}
          ListHeaderComponent={<Space s16 />}
        />
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ translateY: -100 }],
  },
  avatar: {
    width: 100,
    height: 100,
  },
  profileInfoContent: {
    alignItems: "center",
  },
  profileStateContainer: {
    flexDirection: "row",
  },
  profileStateItem: {
    flex: 1,
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  postContainer: {
    alignItems: "center",
  },
});
