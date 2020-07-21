import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

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
      <View style={styles.Item}>
        <AppText style={styles.Title}>{name}</AppText>
        <AppText style={styles.Description} numberOfLines={2}>
          {description}
        </AppText>
        <AppText style={styles.Price}>{`$${price / 100}`}</AppText>
      </View>
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
