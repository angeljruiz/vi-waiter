import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text, Card } from "react-native-elements";

import Ingredient from "./Ingredient";

import defaultStyles from "../../config/styles";

function CardTitle({ name, required }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
    >
      <View style={{ flex: 1 }}>
        <Text h3>{name}</Text>
        <Text h4 style={styles.SectionSubText}>
          {required === "true" ? "Required" : "Optional"}
        </Text>
      </View>
      <Entypo name="chevron-with-circle-down" size={50} color="grey" />
    </View>
  );
}

export default function ItemSection({
  section: { name, required, ingredients },
}) {
  return (
    <>
      <Card
        title={<CardTitle name={name} required={required} />}
        containerStyle={styles.CardBody}
      >
        <>
          {ingredients.map((ingredient, index, self) => {
            return (
              <Ingredient
                {...ingredient}
                key={index}
                last={index === self.length - 1}
              />
            );
          })}
        </>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  CardBody: {
    paddingHorizontal: 30,
  },

  SectionSubText: {
    color: "grey",
  },
});
