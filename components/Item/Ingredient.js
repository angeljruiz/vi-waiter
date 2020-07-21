import React from "react";
import { StyleSheet } from "react-native";

import { ListItem } from "react-native-elements";

export default function Ingredient({ Ingredient: { name, price } }) {
  return (
    <ListItem
      title={name}
      rightSubtitle={price ? `$${price / 100}` : ""}
      bottomDivider
    />
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
