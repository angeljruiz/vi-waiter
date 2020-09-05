import React from "react";

import { ListItem } from "react-native-elements";

export default function Ingredient({ name, price, last }) {
  return (
    <ListItem
      title={name}
      titleStyle={{ fontSize: 28 }}
      subtitle={price ? `$${price / 100}` : null}
      subtitleStyle={{ color: "grey", fontSize: 20 }}
      leftIcon={{ name: "radio-button-unchecked", type: "material", size: 40 }}
      containerStyle={{
        paddingVertical: 40,
        paddingHorizontal: 0,
      }}
      bottomDivider={!last}
    />
  );
}
