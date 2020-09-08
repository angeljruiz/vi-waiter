import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import defaultStyles from "../../config/styles";

export default function Ingredient({ name, price, last }) {
  return (
    <ListItem
      title={name}
      titleStyle={styles.ItemName}
      subtitle={price ? `$${price / 100}` : null}
      subtitleStyle={styles.ItemSubtitle}
      leftIcon={{ name: "radio-button-unchecked", type: "material", size: 14 }}
      containerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 0,
      }}
      bottomDivider={!last}
    />
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background
  },
  ItemSubtitle: {
    color: "grey",
    fontSize: 14,
  },
  ItemName: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
});