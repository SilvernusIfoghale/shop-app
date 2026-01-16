import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SplashLogo } from "../assets/Icons";
import { vs } from "react-native-size-matters";

const PHONE_HEIGHT = Dimensions.get("window").height;

const SplashScreen = () => {
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
