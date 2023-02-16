import { StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import {
  Content,
  Container,
  NextButton,
  PageIndicator,
} from "@/components/onboarding";
import onboadingDummyData from "@/dummyData/onboadingDummyData";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef<any>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressNextButton = () => {
    ref.current.setPage(currentPage + 1);
    const totalPage = onboadingDummyData.length - 1;

    if (totalPage == currentPage) {
      navigation.navigate("Dashboard");
    }
  };

  const onPageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(e.nativeEvent.position);
  };

  return (
    <>
      <StatusBar style="inverted" />
      <Container>
        <PagerView
          style={styles.viewPager}
          initialPage={0}
          onPageSelected={onPageSelected}
          ref={ref}
          showPageIndicator
        >
          {onboadingDummyData.map((item, index) => (
            <View style={styles.page} key={index}>
              <Content
                title={item.title}
                subTitle={item.subTitle}
                imageSource={item.imageSource}
              />
            </View>
          ))}
        </PagerView>
        <PageIndicator
          length={onboadingDummyData.length}
          selectedIndex={currentPage}
        />
        <NextButton
          onPress={onPressNextButton}
          color={currentPage % 2 == 0 ? "DarkColor" : "LightColor"}
          style={styles.nextButton}
          contentXOffset={-20}
          contentYOffset={-32}
        />
      </Container>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    position: "relative",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    position: "absolute",
    bottom: -170,
    right: -120,
  },
});
