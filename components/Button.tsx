import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

interface ButtonProps {
  text: string;
  size: number;
}

const PHONE_wIDTH = Dimensions.get("window").width;

const Button: React.FC<ButtonProps> = ({ text, size }) => {
  const styles = StyleSheet.create({
    button: {
      height: vs(45),
      width: PHONE_wIDTH - s(55),
      backgroundColor: "#F83758",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: s(4),
    },
    textStyle: {
      color: "#ffffff",
      fontSize: size,
      fontWeight: 600,
    },
  });

  return (
    <Pressable style={styles.button}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
