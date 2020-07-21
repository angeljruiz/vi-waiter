import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { ListItem } from "react-native-elements";

import AppText from "../default/AppText";

export default function Item({
  navigation,
  item: { name, description, price, sections },
}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Item", {
          item: {
            name,
            description,
            price,
            sections,
          },
        })
      }
    >
      <ListItem title={name} subtitle={description} bottomDivider />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Item: {
    marginBottom: 15,
  },
  Title: {
    fontSize: 24,
    marginBottom: 15,
  },

  Description: {
    fontSize: 18,
    color: "grey",
    marginBottom: 10,
  },
});
