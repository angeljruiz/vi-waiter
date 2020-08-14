import React from "react";
import { TouchableOpacity } from "react-native";

import { ListItem, Text } from "react-native-elements";

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
        title={<Text h4>{name}</Text>}
        subtitle={description}
        subtitleStyle={{ color: "grey" }}
        bottomDivider
      />
    </TouchableOpacity>
  );
}
