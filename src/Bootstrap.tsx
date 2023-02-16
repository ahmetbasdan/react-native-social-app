import { View, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import FontProvider from "@/utils/providers/FontProvider";

interface IBootstrap {
  children: ReactNode;
}
const Bootstrap: React.FC<IBootstrap> = ({ children }) => {
  return (
    <View style={styles.container}>
      <FontProvider>
        {children}
      </FontProvider>
    </View>
  );
};

export default Bootstrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
