import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../default/AppText";

export default function Ingredient({ Ingredient: { name, price } }) {
  return (
    <View style={styles.Ingredient}>
      <View style={styles.Radio} />
      <AppText style={styles.Title}>{name}</AppText>
      {price && <AppText style={styles.Price}>{`$${price / 100}`}</AppText>}
    </View>
  );
}

const styles = StyleSheet.create({
  Ingredient: {
    padding: 25,
    flexDirection: "row",
  },
  Radio: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
    marginRight: 25,
    borderColor: "grey",
  },

  Title: {
    textAlignVertical: "center",
    fontSize: 25,
  },

  Price: {
    fontSize: 22,
    marginLeft: "auto",
    textAlignVertical: "center",
  },
});
