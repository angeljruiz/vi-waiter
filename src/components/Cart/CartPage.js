import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, addToCart } from '../../actions/app';

import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, Button, Divider } from "react-native-elements";

import CartItem from "../Cart/CartItem";
import TopHeader from '../../navigation/TopHeader.component';

import defaultStyles from "../../config/styles";

export default function CartPage({ navigation }) {
  const app= useSelector(state => state.app );
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
      <ScrollView style={styles.ScrollView}>
        {app.cart &&
          app.cart.map((order, index) => {
            return <CartItem item={order.item} quantity={order.quantity.quantity} navigation={navigation} key={index} />;
          })
        }
      </ScrollView>
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
    backgroundColor: defaultStyles.colors.background
  },
  Header: {
    padding: 15,
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: defaultStyles.colors.background
  },
  Footer: {
    padding: 15,
    backgroundColor: defaultStyles.colors.background
  },
  Title: {
    marginRight: 15,
  },

  ScrollView: {
    backgroundColor: defaultStyles.colors.background,
    paddingHorizontal: 20,
  },

  TableNum: {
    color: "grey",
    textAlignVertical: "bottom",
  },

  OrderItems: {
    padding: 40,
  },
});
