import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { s, vs } from "react-native-size-matters";

interface BoxCardProps {
  active: boolean;
  Icon: React.ComponentType<any>;
  IconActive: React.ComponentType<any>;
  HandleSetActive: () => void;
}

const BoxCard: React.FC<BoxCardProps> = ({
  active,
  Icon,
  IconActive,
  HandleSetActive,
}) => {
  return (
    <Pressable
      style={[{ backgroundColor: active ? "#F17547" : "#F2F2F2" }, styles.box]}
      onPress={HandleSetActive}
    >
      {active ? <IconActive /> : <Icon />}
    </Pressable>
  );
};

export default BoxCard;

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: s(75),
    height: vs(64),
    borderRadius: 17,
    borderWidth: s(2),
    borderColor: "#D8D3D380",
  },
});
