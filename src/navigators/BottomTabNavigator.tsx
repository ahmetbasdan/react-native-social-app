import React from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home";
import Profile from "@/screens/Profile";
import { AddButton } from "@/assets/svg/components";
import { View } from "react-native";
import { IconItem } from "@/components/bottomTabs";
import Favorite from "@/screens/Favorite";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";

const ICON_SIZE = 22;

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
    paddingHorizontal: 12,
  },
  lazy:false
};

const BottomTabNavigator = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToSendMessage = () => navigation.navigate("Conversations");

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconItem name="home" focused={focused} size={ICON_SIZE} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Message"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconItem name="message" focused={focused} size={ICON_SIZE} />
          ),
        }}
        component={View}
        listeners={{
       
         tabPress:goToSendMessage,
          state:goToSendMessage
        }}
      />
      <Tab.Screen
        name="SendMessage"
        options={{
          tabBarIcon: () => {
            return (
              <View style={{ position: "absolute", top: -40 }}>
                <AddButton height={100} width={100} />
              </View>
            );
          },
        }}
        component={View}
      />
      <Tab.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconItem name="favorite" focused={focused} size={ICON_SIZE + 3} />
          ),
        }}
        component={Favorite}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <IconItem name="profile" focused={focused} size={ICON_SIZE} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
