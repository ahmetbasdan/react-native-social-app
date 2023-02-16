import {
  View,
  Dimensions,
  ViewProps,
  StyleSheet,
  Image,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import colors from "@/styles/colors";
import Text from "./Text";
import Icon from "./Icon";
import { iconType } from "@/types";

const BORDER_RADIUS = 12;

const { width } = Dimensions.get("window");

interface IPostCard extends ViewProps {
  imageSource: ImageSourcePropType;
  avatar: string;
  name: string;
  time: string;
  like: number;
  message: number;
  share: number;
}

const PostCard: React.FC<IPostCard> = ({
  avatar,
  imageSource,
  like,
  message,
  name,
  share,
  time,
  ...rest
}) => {
  return (
    <ImageBackground
      imageStyle={styles.imageBackground}
      source={imageSource}
      {...rest}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View>
            <Text type="boydRegular" color="White">
              {name}
            </Text>
            <Text type="caption" color="White">
              {time}
            </Text>
          </View>
        </View>
        <Icon name="options" size={18} color={colors.White}/>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <FoooterCard icon="favorite" iconSize={17} label={like.toString()} />
        <FoooterCard icon="message" iconSize={15} label={message.toString()} />
        <FoooterCard icon="saved" iconSize={14} label={share.toString()} />
      </View>
    </ImageBackground>
  );
};

export default PostCard;

interface IFooterCard {
  icon: iconType;
  iconSize: number;
  label: string;
}

const FoooterCard: React.FC<IFooterCard> = ({ icon, iconSize, label }) => {
  return (
    <View style={styles.footerCard}>
      <Icon
        name={icon}
        size={iconSize}
        color={colors.White}
        style={styles.footerCardIcon}
      />
      <Text type="caption" color="White">
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.95,
    height: width * 0.95,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.Primary,
    marginRight: 12,
  },
  container: {
    width: width * 0.95,
    height: width * 0.95,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 12,
    marginTop: 16,
  },
  headerContent: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 12,
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.Silver,
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    width: 65,
    opacity: 0.9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  footerCardIcon: {
    marginRight: 4,
  },
});
