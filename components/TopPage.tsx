import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SearchIcon, ToggleIcon, WaveIcon } from "../assets/Icons";
import { s, vs } from "react-native-size-matters";
import TopCategories from "./TopCategories";
import { useRoute, RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  TopPage: { name?: string };
};

const TopPage = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "TopPage">>();

  const offers = [
    {
      id: 1,
      text: "20% OFF DURING THE WEEKEND",
      btnText: "Get Now",
      bgColor: "#F17547",
      color: "#ffffff",
      btnColor: "#F17547",
      btnBgColor: "#ffffff",
    },
    {
      id: 2,
      text: "20% OFF DURING THE WEEKEND",
      btnText: "Get Now",
      bgColor: "#1383F1",
      color: "#ffffff",
      btnColor: "#ffffff",
      btnBgColor: "#50D63B",
    },
  ];
  return (
    <View>
      {/* Nav Section  */}
      <View style={styles.navSection}>
        <View style={styles.navContent}>
          <ToggleIcon />
        </View>
        <View style={styles.navContent}>
          <SearchIcon />
        </View>
      </View>
      {/* Top Section Text  */}
      <View style={{ paddingStart: s(15), gap: 10, paddingBottom: s(20) }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Hello {params?.name}
          </Text>
          <WaveIcon />
        </View>
        <Text style={{ color: "#666666", fontSize: 12, fontWeight: "600" }}>
          Let’s start shopping!
        </Text>
      </View>

      {/* Top Offers  */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingHorizontal: s(15) }}
      >
        {offers.map((item) => (
          <View
            style={[styles.offers, { backgroundColor: item.bgColor }]}
            key={item.id}
          >
            <Text style={[styles.offerText, { color: item.color }]}>
              {item.text}
            </Text>
            <Pressable
              style={[styles.btn, { backgroundColor: item.btnBgColor }]}
            >
              <Text
                style={[
                  { fontSize: s(12), fontWeight: "600" },
                  { color: item.btnColor },
                ]}
              >
                {item.btnText}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      {/* Top Categories  */}
      <TopCategories />
    </View>
  );
};

export default TopPage;

const styles = StyleSheet.create({
  navSection: {
    flexDirection: "row",
    paddingHorizontal: s(15),
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: s(25),
  },
  navContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9D9D940",
    width: s(41),
    height: s(41),
    borderRadius: s(22),
  },
  offers: {
    paddingHorizontal: s(19),
    height: vs(130),
    width: s(275),
    borderRadius: s(15),
    justifyContent: "center",
  },
  offerText: {
    fontSize: s(16),
    fontWeight: "700",
    lineHeight: s(23),
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: s(80),
    height: vs(34),
    borderRadius: s(20),
    marginTop: s(13),
  },
});
