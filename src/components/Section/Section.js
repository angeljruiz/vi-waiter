import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "react-native-elements";

import Item from "../Item/Item";

export default function Section({ section: { name, items }, navigation }) {
  const ref = React.useRef(null);

  return (
    <View style={styles.Section}>
      <Text style={styles.Title}>
        {name}
      </Text>
      {items.map((item, index) => {
        return <Item item={item} navigation={navigation} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({

  Section: {
    marginBottom: 20,
    paddingHorizontal: 0,
  },

  Title: {
    fontSize: 24,
    fontWeight: '500',
  },
});
