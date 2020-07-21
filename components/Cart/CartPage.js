import React from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppText from "../default/AppText";
import Item from "../Item/Item";

export default function CartPage({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.Header}>
        <AppText style={styles.Title}>Order Details</AppText>
        <AppText style={styles.TableNum}>Table #3</AppText>
      </View>
      <ScrollView style={styles.OrderItems}></ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
        <View style={styles.Footer}>
          <Button title="Checkout" />
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Header: {
    padding: 40,
    flexDirection: "row",
  },
  Footer: {
    padding: 40,
  },
  Title: {
    fontSize: 32,
    marginRight: 15,
  },

  TableNum: {
    fontSize: 24,
    color: "grey",
    textAlignVertical: "bottom",
  },

  HR: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },

  OrderItems: {
    padding: 40,
  },
});
