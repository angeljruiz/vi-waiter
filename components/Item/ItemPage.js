import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";

import AppText from "../default/AppText";
import ItemSection from "./ItemSection";
import AppTextInput from "../default/AppTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ItemPage({ route, navigation }) {
  const { name, description, price, sections } = route.params.item;
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.ItemPage}>
      <ScrollView>
        <View style={styles.Header}>
          <AppText style={styles.HeaderText}>{name}</AppText>
          <AppText style={styles.HeaderDescription}>{description}</AppText>
        </View>
        {sections.map((section, index) => (
          <ItemSection section={section} key={index} />
        ))}
        <View style={styles.QuantityButtonsContainer}>
          <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
            <AppText style={styles.QuantityButtons}>-</AppText>
          </TouchableOpacity>
          <AppText style={styles.QuantityLabel}>{quantity}</AppText>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <AppText style={styles.QuantityButtons}>+</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Resturant")}>
        <View style={styles.AddToCart}>
          <AppText>{`Add ${quantity} to Cart`}</AppText>
          <AppText style={styles.CartButtonTotal}>{`$${
            (price * quantity) / 100
          }`}</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemPage: {
    paddingBottom: 73,
  },
  Header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  HeaderText: {
    fontSize: 40,
    fontWeight: "700",
  },
  HeaderDescription: {
    fontSize: 32,
    color: "grey",
  },

  AddToCart: {
    flexDirection: "row",
    width: "96%",
    marginHorizontal: "2%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  CartButtonTotal: {
    fontSize: 32,
    position: "absolute",
    right: 30,
  },

  QuantityButtons: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: "lightgrey",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: 15,
  },

  QuantityButtonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 30,
  },

  QuantityLabel: {
    fontSize: 40,
    textAlignVertical: "center",
  },
});
