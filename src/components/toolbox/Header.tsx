import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import Text from "./Text";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import helper from "@/styles/helper";

const { width } = Dimensions.get("window");

interface IHeader extends ViewProps {
  leftContent?: ReactNode;
  title?: string;
  rigthContet?: string | ReactNode;
  isBack?: boolean;
  style?: ViewStyle;
}

const Header: React.FC<IHeader> = ({
  leftContent,
  rigthContet,
  title,
  isBack,
  style,
  ...rest
}) => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View {...rest} style={[style, styles.container]}>
      {isBack && (
        <TouchableOpacity onPress={goBack}>
          <Icon name="backArrow" size={19} />
        </TouchableOpacity>
      )}
      {title && <Text type="boydRegular">{title}</Text>}
      {leftContent && leftContent}
      {rigthContet}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: helper.pagePaddingHorizontal.paddingHorizontal,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 45,
  },
});
