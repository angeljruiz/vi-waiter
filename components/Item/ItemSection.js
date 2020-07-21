import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          <AppText style={styles.SectionText}>{name}</AppText>
          <AppText style={styles.SectionSubText}>
            {required === "true" ? "Required" : "Optional"}
          </AppText>
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
              {index !== ingredients.length - 1 && <View style={styles.HR} />}
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
    backgroundColor: "lightgrey",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  SectionText: {
    fontSize: 32,
  },

  SectionSubText: {
    fontSize: 20,
    color: "grey",
  },

  HR: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
