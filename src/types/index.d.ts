import { ImageSourcePropType } from "react-native";

type RootStackParamList = {
  OnBoading: undefined;
  Dashboard: undefined;
  Conversations: undefined;
  Message: undefined;
};

type onboardingDataType = {
  title: string;
  subTitle: string;
  imageSource: ImageSourcePropType;
};

type postDataType = {
  imageSource: ImageSourcePropType;
  avatar: string;
  name: string;
  time: string;
  like: number;
  message: number;
  share: number;
};

type ConversationDataType = {
  avatarUrl: string;
  fullName: string;
  lastMessage: string;
  onPress?:()=>void;
};

type iconType =
  | "backArrow"
  | "favorite"
  | "galery"
  | "home"
  | "menu"
  | "message"
  | "options"
  | "profile"
  | "saved"
  | "search"
  | "share"
  | "notify"
  | "nextArrow";
