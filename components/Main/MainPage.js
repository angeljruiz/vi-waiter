import * as React from "react";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import data from "../../assets/data.json";

import Section from "../Section/Section";
import { Card, Text, Button } from "react-native-elements";

import defaultStyles from "../../config/styles";

const firstMenu = data[0];

function MainPage({ navigation }) {
  return (
    <React.Fragment>
      <ScrollView>
        <Image
          resizeMode="stretch"
          source={require("../../assets/vegs.jpg")}
          style={styles.Image}
        />
        <Card
          title="La Fiebre"
          titleStyle={styles.Title}
          containerStyle={styles.MainCard}
        >
          <Text style={styles.Subtitle} h4>
            KM 5.8 PR-115, Añasco, 00610
          </Text>
        </Card>
        <View style={styles.MainBody}>
          <View style={styles.MenuSelectorButton}>
            <Button
              icon={
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={32}
                  color={defaultStyles.colors.medium}
                />
              }
              iconRight
              title="Dinner"
              type="outline"
              titleStyle={{ fontSize: 28, color: "black" }}
            />
          </View>
          {firstMenu.sections.map((section, index) => (
            <Section section={section} navigation={navigation} key={index} />
          ))}
        </View>
      </ScrollView>
      <Button
        title={`View Cart`}
        buttonStyle={styles.ViewCart}
        onPress={() => navigation.navigate("Cart")}
      />
    </React.Fragment>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 15,
  },

  MainCard: {
    marginHorizontal: 0,
    marginBottom: 15,
    marginTop: 0,
  },

  Title: {
    fontSize: 32,
  },

  Subtitle: {
    color: "grey",
  },

  MainBody: {
    paddingHorizontal: 15,
  },

  Image: {
    width: "100%",
    height: 250,
  },

  MenuSelectorButton: {
    flexDirection: "row",
  },

  ViewCart: {
    marginHorizontal: 15,
    marginBottom: 15,
  },

  CartButtonTotal: {
    position: "absolute",
    right: 30,
  },
});
