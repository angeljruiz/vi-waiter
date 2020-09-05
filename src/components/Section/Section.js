import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "react-native-elements";

import Item from "../Item/Item";

export default function Section({ section: { name, items }, navigation }) {
  const ref = React.useRef(null);

  return (
    <View style={styles.Section}>
      <Text h3 style={styles.Title}>
        {name}
      </Text>
      {items.map((item, index) => {
        return <Item item={item} navigation={navigation} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    marginVertical: 30,
  },

  Section: {
    marginBottom: 20,
  },
});
