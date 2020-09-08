import React from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, Button, Divider } from "react-native-elements";

import Item from "../Item/Item";
import TopHeader from '../../navigation/TopHeader.component';

export default function CartPage({ navigation }) {
  return (
    <View style={styles.Container}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <TopHeader title="Order Details" leftIcon="none" rightIcon="none"
        onPress={()=>navigation.goBack()} />
      <Divider/>
      <View style={styles.Header}>
        <Text style={styles.TableNum}>
          Table #3
        </Text>
      </View>
      <ScrollView style={styles.OrderItems}></ScrollView>
      <View style={styles.Footer}>
        <Button
          title="Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingBottom: 100,
    paddingTop: 40,
    paddingHorizontal: 0,
  },
  Header: {
    padding: 15,
    flexDirection: "row",
    alignItems: "baseline",
  },
  Footer: {
    padding: 15,
  },
  Title: {
    marginRight: 15,
  },

  TableNum: {
    color: "grey",
    textAlignVertical: "bottom",
  },

  OrderItems: {
    padding: 40,
  },
});
