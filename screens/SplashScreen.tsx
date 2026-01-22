import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { SplashLogo } from "../assets/Icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const PHONE_HEIGHT = Dimensions.get("window").height;

type RootStackParamList = {
  GetStarted: undefined;
};

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted");
    }, 4000);
  }, [navigation]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <SplashLogo />
        <Text style={styles.text}>Stylish</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    height: PHONE_HEIGHT - 50,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  text: {
    color: "#F83758",
    fontSize: 40,
    fontWeight: 700,
  },
});
