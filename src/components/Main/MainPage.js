import React, { useState, useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateMenu } from '../../actions/app';

import { ScrollView, View, StyleSheet, Image, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Section from "../Section/Section";
import { Card, Text, Button } from "react-native-elements";

import defaultStyles from "../../config/styles";
import axios from "axios";

const MainPage = ({ navigation, state, updateMenu }) => {
  const [firstMenu, setMenu] = useState();

  useEffect(() => {
    axios
      .get("https://virtual-waiter-backend.herokuapp.com/resturant")
      .then(({ data }) => {
        setMenu(data);
        console.log(data);
      });
  }, []);
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView style={styles.ScrollView}>
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
        <Text style={styles.StoreInfo}>
          Store Info
        </Text>
        <Text style={styles.Address}>
          KM 5.8 PR-115, Añasco, 00610
        </Text>
        </Card>
        <View style={styles.MainBody}>
          {firstMenu &&
            firstMenu.sections.map((section, index) => (
              <Section section={section} navigation={navigation} key={index} />
            ))}
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 0,
  },

  ScrollView: {
    backgroundColor: defaultStyles.colors.background
  },

  MainCard: {
    marginHorizontal: 0,
    marginBottom: 15,
    marginTop: 0,
  },

  Title: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },

  StoreInfo: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 5,
  },

  Address: {
    fontSize: 14,
    color: "grey",
  },

  MainBody: {
    paddingHorizontal: 15,
    backgroundColor: defaultStyles.colors.background
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

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateMenu }, dispatch)
}

const mapStateToProps = state => {
	return {
    state: state,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( MainPage );