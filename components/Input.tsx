import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { s, vs } from "react-native-size-matters";

interface inputProps {
  placeholderText: string;
  iconLeft: ReactNode;
  iconRight?: ReactNode;
  IconRightClose?: ReactNode;
  secure: boolean;
  inputValue: string;
  handleChangeText: (text: string) => void;
  show?: boolean;
  handleShow?: () => void;
}

const PHONE_wIDTH = Dimensions.get("window").width;

const Input: React.FC<inputProps> = ({
  placeholderText,
  iconLeft,
  iconRight,
  IconRightClose,
  secure,
  inputValue,
  handleChangeText,
  show,
  handleShow,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.leftIcon}>{iconLeft}</View>
      <View>
        <TextInput
          value={inputValue}
          onChangeText={handleChangeText}
          placeholder={placeholderText}
          keyboardType="default"
          secureTextEntry={show}
          style={styles.input}
          textContentType="password"
        />
      </View>
      <Pressable onPress={handleShow} style={styles.rightIcon}>
        {show ? iconRight : IconRightClose}
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    height: vs(45),
    width: PHONE_wIDTH - s(55),
    justifyContent: "center",
    marginHorizontal: "auto",
    borderColor: "#c4c4c4",
    borderWidth: 1,
    borderRadius: s(10),
    backgroundColor: "#F3F3F3",
  },
  input: {
    paddingStart: s(39),
    fontWeight: 500,
    color: "#676767",
    fontSize: 16,
  },
  leftIcon: {
    position: "absolute",
    left: 13,
    zIndex: 2,
  },
  rightIcon: {
    position: "absolute",
    right: 13,
    zIndex: 2,
  },
});
