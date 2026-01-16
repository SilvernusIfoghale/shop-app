import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./screens/SplashScreen";
import SignIn from "./screens/SignIn";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
});
