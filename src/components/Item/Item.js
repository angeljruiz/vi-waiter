import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { ListItem, Text } from "react-native-elements";
import defaultStyles from "../../config/styles";

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
      <ListItem
        title={<Text style={styles.ItemName}>{name}</Text>}
        subtitle={description}
        subtitleStyle={styles.ItemDescription}
        containerStyle={styles.Container}
        bottomDivider
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background
  },
  ItemDescription: {
    color: "grey",
    fontSize: 14,
  },
  ItemName: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
});