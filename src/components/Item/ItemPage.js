import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Text, Button, Divider } from "react-native-elements";

import ItemSection from "./ItemSection";
import defaultStyles from "../../config/styles";

export default function ItemPage({ route, navigation }) {
  const { name, description, sections } = route.params.item;
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.ItemPage}>
      <ScrollView>
        <Card>
          <Text h3>{name}</Text>
          <Divider style={{ marginVertical: 10 }} />
          <Text h4 style={styles.HeaderDescription}>
            {description}
          </Text>
        </Card>
        {sections.map((section, index) => (
          <ItemSection {...section} key={index} />
        ))}
        <View style={styles.QuantityButtonsContainer}>
          <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
            <Text style={styles.QuantityButtons}>-</Text>
          </TouchableOpacity>
          <Text style={styles.QuantityLabel}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.QuantityButtons}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button
        title={`Add ${quantity} to Cart`}
        onPress={(e) => navigation.navigate("Restaurant")}
        buttonStyle={{ marginHorizontal: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ItemPage: {
    paddingBottom: 60,
  },

  HeaderDescription: {
    color: "grey",
  },

  AddToCart: {
    marginHorizontal: 15,
    borderRadius: 20,
  },

  CartButtonTotal: {
    position: "absolute",
    right: 15,
  },

  QuantityButtons: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "lightgrey",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 100,
    marginHorizontal: 15,
    backgroundColor: "white",
    overflow: "hidden",
  },

  QuantityButtonsContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },

  QuantityLabel: {
    fontSize: 40,
    textAlignVertical: "center",
  },
});
