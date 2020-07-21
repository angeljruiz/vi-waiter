import * as React from "react";
import { ScrollView, View, StyleSheet, ImageBackground } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import data from "../../assets/data.json";

import AppText from "../default/AppText";
import Section from "../Section/Section";

const firstMenu = data[0];

function MainPage({ navigation }) {
  return (
    <React.Fragment>
      <ScrollView style={styles.MainPage}>
        <ImageBackground
          resizeMode="stretch"
          source={require("../../assets/vegs.jpg")}
          style={styles.ImageBackground}
        >
          <View style={styles.SettingsButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Feather
                style={styles.SettingsButton}
                name="settings"
                size={32}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.MainBody}>
          <AppText style={styles.HeaderText}>La Fiebre</AppText>
          <AppText style={styles.SubheaderText}>
            KM 5.8 PR-115, Añasco, 00610
          </AppText>
          <View style={styles.HR} />
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

  ImageBackground: {
    padding: 10,
    height: 250,
    alignItems: "flex-end",
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
