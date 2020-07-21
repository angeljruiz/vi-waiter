import * as React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import data from "../../assets/data.json";

import AppText from "../default/AppText";
import Section from "../Section/Section";
import { Divider, Card, Text } from "react-native-elements";

const firstMenu = data[0];

function MainPage({ navigation }) {
  return (
    <React.Fragment>
      <ScrollView style={styles.MainPage}>
        <Card>
          <Image
            resizeMode="stretch"
            source={require("../../assets/vegs.jpg")}
            style={styles.Image}
          ></Image>
          <Text h1>La Fiebre</Text>
          <Text h4>KM 5.8 PR-115, Añasco, 00610</Text>
        </Card>
        <View style={styles.MainBody}>
          <View style={styles.MenuSelectorButton}>
            <AppText style={styles.MenuSelector}>Dinner</AppText>
            <AntDesign name="downcircleo" size={20} color="black" />
          </View>
          {firstMenu.sections.map((section, index) => (
            <Section section={section} navigation={navigation} key={index} />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <View style={styles.ViewCart}>
          <AppText style={styles.CartButtonText}>View Cart</AppText>
          <AppText style={styles.CartButtonTotal}>{`$17.38`}</AppText>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  MainPage: {
    flex: 1,
  },

  MainBody: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },

  SettingsButton: {
    backgroundColor: "white",
    borderRadius: 10,
  },

  Image: {
    width: "100%",
    height: 250,
  },

  HeaderText: {
    fontSize: 40,
    fontWeight: "bold",
  },

  SubheaderText: {
    fontSize: 20,
    marginVertical: 12,
  },

  HR: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },

  MenuSelector: {
    fontSize: 20,
    marginRight: 10,
  },

  MenuSelectorButton: {
    fontSize: 20,
    flexDirection: "row",
    marginBottom: 10,
  },

  ViewCart: {
    flexDirection: "row",
    width: "96%",
    marginHorizontal: "2%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  CartButtonText: {
    fontSize: 32,
  },

  CartButtonTotal: {
    fontSize: 32,
    position: "absolute",
    right: 30,
  },
});
