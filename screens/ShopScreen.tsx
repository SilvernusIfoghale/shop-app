import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Items from "../components/Items";

const ShopScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Items />
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
