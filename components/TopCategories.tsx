import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import {
  BagBlack,
  BagWhite,
  GlassBlack,
  GlassWhite,
  PoloBlack,
  PoloWhite,
  ShoeBlack,
  ShoeWhite,
  WatchBlack,
  WatchWhite,
} from "../assets/Icons";
import BoxCard from "./BoxCard";

const TopCategories = () => {
  const [activeCategory, setActiveCategory] = useState("watch");
  const categories = [
    {
      id: 1,
      name: "watch",
      icon: WatchBlack,
      iconActive: WatchWhite,
    },
    {
      id: 2,
      name: "polo",
      icon: PoloBlack,
      iconActive: PoloWhite,
    },
    {
      id: 3,
      name: "bag",
      icon: BagBlack,
      iconActive: BagWhite,
    },
    {
      id: 4,
      name: "shoe",
      icon: ShoeBlack,
      iconActive: ShoeWhite,
    },
    {
      id: 5,
      name: "glass",
      icon: GlassBlack,
      iconActive: GlassWhite,
    },
  ];
  return (
    <View style={styles.container}>
      {/* Top  */}
      <View style={styles.top}>
        <Text style={{ fontWeight: 600, fontSize: s(19), color: "#00000" }}>
          Top Categories
        </Text>
        <Text style={{ fontWeight: 500, fontSize: s(16), color: "#F17547" }}>
          See All
        </Text>
      </View>

      {/* Scroll Area  */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: vs(15), gap: s(15) }}
      >
        {categories.map((item) => (
          <BoxCard
            key={item.id}
            active={item.name == activeCategory}
            HandleSetActive={() => setActiveCategory(item.name)}
            Icon={item.icon}
            IconActive={item.iconActive}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopCategories;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(28),
    paddingBottom: vs(34),
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: s(15),
    paddingBottom: vs(15),
  },
});
