import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, Button } from "react-native-elements";

import Item from "../Item/Item";

export default function CartPage({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.Header}>
        <Text h2 style={styles.Title}>
          Order Details
        </Text>
        <Text h4 style={styles.TableNum}>
          Table #3
        </Text>
      </View>
      <ScrollView style={styles.OrderItems}></ScrollView>
      <View style={styles.Footer}>
        <Button
          title="Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Header: {
    padding: 15,
    flexDirection: "row",
    alignItems: "baseline",
  },
  Footer: {
    padding: 15,
  },
  Title: {
    marginRight: 15,
  },

  TableNum: {
    color: "grey",
    textAlignVertical: "bottom",
  },

  OrderItems: {
    padding: 40,
  },
});
