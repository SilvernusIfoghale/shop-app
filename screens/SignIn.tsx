import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import Input from "../components/Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Button from "../components/Button";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../assets/Icons";
import Socials from "../components/Socials";

const SignIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const socialsData = [<GoogleIcon />, <AppleIcon />, <FacebookIcon />];

  const handleUserInput = (text: string) => {
    setUser(text);
  };

  const handlePasswordInput = (text: string) => {
    setPassword(text);
  };

  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>
      <View style={{ gap: vs(20) }}>
        <Input
          inputValue={user}
          handleChangeText={handleUserInput}
          placeholderText="Username or Email"
          secure={false}
          iconLeft={<FontAwesome5 name="user-alt" size={20} color="#626262" />}
        />
        <Input
          placeholderText="Password"
          inputValue={password}
          handleChangeText={handlePasswordInput}
          secure={true}
          iconLeft={<MaterialIcons name="lock" size={23} color="#626262" />}
          iconRight={<Feather name="eye" size={20} color="#626262" />}
          IconRightClose={<Feather name="eye-off" size={20} color="#626262" />}
          show={passwordShow}
          handleShow={handleShowPassword}
        />
      </View>
      <View style={{ marginBottom: vs(48) }}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
      <View>
        <Button text="Login" size={20} />
      </View>

      <View style={{ marginTop: vs(75) }}>
        <Text style={styles.continueText}>- OR Continue with -</Text>
        <View style={styles.socials}>
          {socialsData.map((item, index) => (
            <Socials key={index} socialIcon={item} />
          ))}
        </View>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.createAccount}>Create An Account</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(25),
  },
  topTextContainer: {
    marginBottom: vs(36),
    marginTop: vs(15),
    width: s(185),
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 700,
  },
  forgotText: {
    fontSize: 12,
    color: "#F83758",
    fontWeight: 400,
    textAlign: "right",
    paddingTop: 9,
  },
  continueText: {
    fontSize: 12,
    fontWeight: 700,
    color: "#575757",
    textAlign: "center",
  },
  socials: {
    flexDirection: "row",
    gap: s(8),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: vs(20),
  },

  accountContainer: {
    flexDirection: "row",
    gap: s(7),
    paddingTop: vs(22),
    justifyContent: "center",
    alignItems: "center",
  },
  createAccount: {
    fontSize: 14,
    fontWeight: 400,
    color: "#575757",
  },
  signUp: {
    fontSize: 14,
    fontWeight: 600,
    color: "#F83758",
    textDecorationLine: "underline",
  },
});
