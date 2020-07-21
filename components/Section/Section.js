import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../default/AppText";
import Item from "../Item/Item";

export default function Section({ section: { name, items }, navigation }) {
  const ref = React.useRef(null);

  return (
    <View style={styles.Section}>
      <AppText style={styles.Title}>{name}</AppText>
      {items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <Item item={item} navigation={navigation} />
            {index !== items.length - 1 && <View style={styles.HR} />}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
  },

  HR: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },

  Section: {
    marginBottom: 20,
  },
});
