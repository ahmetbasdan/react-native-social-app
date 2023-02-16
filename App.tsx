import Bootstrap from "@/Bootstrap";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "@/navigators/MainNavigator";

export default function App() {
  return (
    <Bootstrap>
      <MainNavigator />
    </Bootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
