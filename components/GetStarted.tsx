import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "./Button";
import { LinearGradient } from "expo-linear-gradient";

const PHONE_WIDTH = Dimensions.get("window").width;
const PHONE_HEIGHT = Dimensions.get("window").height;

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./../assets/unsplash.jpg")}
        imageStyle={styles.image}
        style={styles.backgroundImage}
      />
      <LinearGradient
        style={styles.contentWrapper}
        colors={["rgba(0, 0, 0, 0.02)", "rgba(0, 0, 0, 0.65)"]}
      >
        <View style={styles.content}>
          <Text
            style={{
              fontSize: 33,
              fontWeight: 600,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            You want Authentic, here you go!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#F2F2F2",
              textAlign: "center",
              paddingVertical: 5,
            }}
          >
            Find it here, buy it now!
          </Text>
          <View>
            <Button text="Get Started" size={23} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: PHONE_WIDTH, // Or specific dimensions
    height: PHONE_HEIGHT,
  },
  image: {
    resizeMode: "cover", // Ensures the image fills the container properly
  },
  contentWrapper: {
    position: "absolute",
    bottom: 0,
    height: "45%",
    width: PHONE_WIDTH,
  },
  content: {
    paddingVertical: 50,
    height: 200,
    width: "90%",
    zIndex: 3,
    position: "absolute",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: 30,
  },
});
