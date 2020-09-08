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
        <Text>{name}</Text>
        <Text style={styles.SectionSubText}>
          {required === "true" ? "Required" : "Optional"}
        </Text>
      </View>
      <Entypo name="chevron-with-circle-down" size={18} color="grey" />
    </View>
  );
}

export default function ItemSection({
  name,
  required,
  ingredients,
  maxSelection,
}) {
  return (
    <>
      <Card
        title={<CardTitle name={name} required={required} />}
        titleStyle={styles.Title}
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
    backgroundColor: defaultStyles.colors.background,
  },
  SectionSubText: {
    color: "grey",
  },
  Title: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
});
