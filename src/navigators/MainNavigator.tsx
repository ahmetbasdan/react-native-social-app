import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

//screens
import Onboarding from "@/screens/Onboarding";
import BottomTabNavigator from "./BottomTabNavigator";
import Conversations from "@/screens/Conversations";
import Message from "@/screens/Message";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="OnBoading" component={Onboarding} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        <Stack.Screen name="Conversations" component={Conversations} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;



