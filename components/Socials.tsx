import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";

interface socialsProps {
  socialIcon: ReactNode;
}

const Socials = ({ socialIcon }: socialsProps) => {
  return (
    <View style={styles.container}>
      <View>{socialIcon}</View>
    </View>
  );
};

export default Socials;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF3F6",
    justifyContent: "center",
    alignItems: "center",
    height: s(54),
    width: s(54),
    borderRadius: s(27),
    borderWidth: 1.5,
    borderColor: "#F83758",
  },
});
