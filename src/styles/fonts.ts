import { StyleSheet } from "react-native";

const size = {
  title: 39,
  h1: 31.25,
  h2: 25,
  h3: 20,
  bodyRegular: 16,
  bodySmall: 14,
  caption: 12.8,
  buttonRegular: 16,
  buttonLarge: 20,
};

const style = StyleSheet.create({
  title: {
    fontSize: size.title,
    fontFamily: "Poppins",
  },
  h1: {
    fontSize: size.h1,
    fontFamily: "Poppins",
  },
  h2Bold: {
    fontSize: size.h2,
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  h2Regular: {
    fontSize: size.h2,
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  h3: {
    fontSize: size.h3,
    fontFamily: "Poppins",
  },
  boydRegular: {
    fontFamily: "Poppins",
    fontSize: size.bodyRegular,
  },
  boydSmall: {
    fontFamily: "Poppins",
    fontSize: size.bodySmall,
  },
  caption: {
    fontFamily: "Poppins",
    fontSize: size.caption,
  },
  buttonRegular: {
    fontFamily: "Poppins",
    fontSize: size.buttonRegular,
  },
  buttonLarge: {
    fontFamily: "Poppins",
    fontSize: size.buttonLarge,
  },
});

export default {
  size,
  style,
};
