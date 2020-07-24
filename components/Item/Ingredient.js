import React from "react";

import { ListItem } from "react-native-elements";

export default function Ingredient({ name, price, last }) {
  return (
    <ListItem
      title={name}
      titleStyle={{}}
      subtitle={price ? `$${price / 100}` : null}
      leftIcon={{ name: "radio-button-unchecked", type: "material", size: 40 }}
      containerStyle={{
        paddingVertical: 40,
      }}
      bottomDivider={!last}
    />
  );
}
