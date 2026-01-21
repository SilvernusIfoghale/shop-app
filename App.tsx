import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./screens/SplashScreen";
import SignIn from "./screens/SignIn";
import GetStarted from "./components/GetStarted";
import ShopScreen from "./screens/ShopScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <SignIn /> */}
      {/* <GetStarted /> */}
      <ShopScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
