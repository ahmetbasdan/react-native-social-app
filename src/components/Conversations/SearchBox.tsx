import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import React from "react";
import colors from "@/styles/colors";
import { Icon, Text } from "@/components/toolbox";

const { width } = Dimensions.get("window");

interface ISearchBox extends TextInputProps {
  style?: TextStyle;
}

const SearchBox: React.FC<ISearchBox> = ({ style, ...rest }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={18} style={styles.searchIcon} />
      <TextInput
        {...rest}
        placeholder="Search for contacts"
        style={[styles.input, style]}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    backgroundColor: colors.White,
    borderRadius: 15,
    height: 48,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    paddingLeft: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchIcon: {
    marginRight: 18,
  },
  input: {
    fontSize: 12,
    flex: 1,
  },
});
