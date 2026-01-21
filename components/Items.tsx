import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";
import ItemCard from "./ItemCard";
import {
  AppleWatch,
  RedmiWatch,
  SamsungWatch,
  TechnoWatch,
} from "../assets/Icons";
import TopCategories from "./TopCategories";
import TopPage from "./TopPage";

const Header = () => (
  <View>
    <TopPage />;
  </View>
);

const Items = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      bonus: "10% OFF",
      name: "Redmi Watch 4",
      newPrice: 45000,
      oldPrice: 55000,
      img: RedmiWatch,
      active: false,
    },
    {
      id: 2,
      bonus: "35% OFF",
      name: "Apple Watch - series 6",
      newPrice: 95000,
      oldPrice: 155000,
      img: AppleWatch,
      active: false,
    },
    {
      id: 3,
      bonus: "20% OFF",
      name: "Samsung Watch 2",
      newPrice: 75000,
      oldPrice: 95000,
      img: SamsungWatch,
      active: false,
    },
    {
      id: 4,
      bonus: "30% OFF",
      name: "Tecno Watch Active 6",
      newPrice: 35000,
      oldPrice: 65000,
      img: TechnoWatch,
      active: false,
    },
  ]);

  const handleChange = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item,
      ),
    );
  };
  return (
    <FlatList
      ListHeaderComponent={Header}
      data={items}
      keyExtractor={(items) => items.id.toString()}
      renderItem={({ item }) => (
        <ItemCard
          id={item.id}
          bonus={item.bonus}
          name={item.name}
          newPrice={item.newPrice}
          oldPrice={item.oldPrice}
          Img={item.img}
          active={item.active}
          handleFavoriteChange={() => handleChange(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={{
        marginBottom: vs(10),
        paddingHorizontal: s(15),
        justifyContent: "space-between",
      }}
      contentContainerStyle={{ paddingBottom: vs(10) }}
    />
  );
};

export default Items;

const styles = StyleSheet.create({});
