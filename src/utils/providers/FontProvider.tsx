import React, { ReactNode } from "react";
import { useFonts } from "expo-font";

interface IFontProvider {
  children: ReactNode;
}

const FontProvider: React.FC<IFontProvider> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    "Poppins": require("../../assets/fonts/poppins.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <>{children}</>;
};

export default FontProvider;
