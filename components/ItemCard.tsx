import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { SvgProps } from "react-native-svg";
import { FavoriteActive, FavoriteInactive } from "../assets/Icons";

const PHONE_WIDTH = Dimensions.get("window").width;

interface ItemCardProps {
  id: number;
  bonus: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  Img: (props: SvgProps) => React.JSX.Element;
  active: boolean;
  handleFavoriteChange: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  bonus,
  name,
  newPrice,
  oldPrice,
  Img,
  active,
  handleFavoriteChange,
}) => {
  return (
    <View style={styles.container}>
      {/* top  */}
      <View style={styles.header}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>{bonus}</Text>
        </View>
        <Pressable onPress={handleFavoriteChange}>
          {active ? <FavoriteActive /> : <FavoriteInactive />}
        </Pressable>
      </View>
      {/* product  */}
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img />
        </View>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      {/* Price  */}
      <View style={styles.pricesContainer}>
        <Text style={styles.newPrice}># {newPrice}</Text>
        <Text style={styles.oldPrice}># {oldPrice}</Text>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    padding: s(10),
    height: vs(185),
    // width: s(153),
    width: PHONE_WIDTH / 2 - vs(19),
    backgroundColor: "#F8F8F8",
    borderRadius: s(18),
    justifyContent: "space-between",
  },
  topTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: s(55),
    height: s(24),
    borderRadius: s(10),
  },
  topText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#000000BF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  nameText: {
    color: "#000000BF",
    fontSize: 14,
    fontWeight: 500,
    paddingTop: 10,
  },
  pricesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 700,
    color: "#AFAFAF",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontSize: 12.23,
    fontWeight: 800,
    color: "#000000",
  },
});
