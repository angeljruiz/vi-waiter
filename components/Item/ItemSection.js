import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-elements";

import AppText from "../default/AppText";
import Ingredient from "./Ingredient";

import defaultStyles from "../../config/styles";

export default function ItemSection({
  section: { name, required, ingredients },
}) {
  return (
    <View style={styles.ItemSection}>
      <View style={styles.ItemSectionHeader}>
        <View>
          <Text h2>{name}</Text>
          <Text h4 style={styles.SectionSubText}>
            {required === "true" ? "Required" : "Optional"}
          </Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-down"
          size={64}
          color={defaultStyles.colors.medium}
        />
      </View>
      <View style={styles.SectionBody}>
        {ingredients.map((ingredient, index) => {
          return (
            <React.Fragment key={index}>
              <Ingredient Ingredient={ingredient} />
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ItemSection: {
    justifyContent: "flex-start",
    marginBottom: 35,
  },
  SectionBody: {
    paddingHorizontal: 15,
  },
  ItemSectionHeader: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  SectionText: {
    fontSize: 32,
  },

  SectionSubText: {
    color: "grey",
  },

  HR: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
