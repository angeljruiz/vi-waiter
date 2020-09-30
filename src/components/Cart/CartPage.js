import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, addToCart, updatePrice } from '../../actions/app';

import { View, StyleSheet, ScrollView, StatusBar} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, Button, Divider } from "react-native-elements";

import CartItem, {CartPriceIngredient, CartPriceSections} from "../Cart/CartItem";
import TopHeader from '../../navigation/TopHeader.component';

import defaultStyles from "../../config/styles";
import {toCurrency} from "../../config/functions";

const taxRate=0.06;
const feeRate=0.10;

var subtotal;
var tax;
var fee;
var total;
var Total;

export default function CartPage({ navigation }) {
  const app= useSelector(state => state.app );
  const dispatch = useDispatch();
  const TotalPrice = (cart) => {
    console.log(cart);
    var price=0;
    var itemPrice;
    if(cart){
      for(var i=0; i<cart.length; ++i){ 
        itemPrice = parseInt( cart[i].item.price ) 
         + CartPriceSections(cart[i].item.sections);
        price += itemPrice * parseInt(cart[i].quantity.quantity);
      }
    }
    subtotal=price;
    tax=Math.round(price * taxRate);
    fee=Math.round(price * feeRate);
    total=price+tax+fee;
    return(
      {"Subtotal":price, "Taxes": tax, "Fee": fee, "Total": total}
      )
  }

  const TotalPriceList = (cart) => {
    const sum=TotalPrice(cart);
    Total = toCurrency(sum.Total);
    return(
      <View style={styles.Footer}>
      <Text style={styles.Price}>
        Subtotal: &#09;{toCurrency(sum.Subtotal)}
      </Text>
      <Text style={styles.Price}>
        Service Fees: &#09;{toCurrency(sum.Fee)}
      </Text>
      <Text style={styles.Price}>
        Taxes: &#09;{toCurrency(sum.Taxes)}
      </Text>
      <Divider/>
      <Text style={styles.PriceTotal}>
        Total: &#09;{toCurrency(sum.Total)}
      </Text>
    </View>
    )
  }

  const onPressCheckout = () => {
    const sum=TotalPrice(app.cart);
    dispatch(updatePrice(sum))
    navigation.navigate("Checkout")
  }

  return (
    <View style={styles.Container}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <TopHeader title={`Order Details Table #3`} leftIcon="none" rightIcon="none"
        onPress={()=>navigation.goBack()} />
      <Divider/>
      <ScrollView style={styles.ScrollView}>
        {app.cart &&
          app.cart.map((order, index) => {
            return <CartItem item={order.item} quantity={order.quantity.quantity} navigation={navigation} key={index} />;
          })
        }
        {TotalPriceList(app.cart)}        
      </ScrollView>
        <Button
          title={`Checkout ${Total}`}  
          onPress={onPressCheckout}
        />
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
  Price: {
    color: "grey",
    textAlignVertical: "bottom",
    textAlign: "right",
    paddingBottom: 5,

  },
  PriceTotal: {
    color: "black",
    textAlignVertical: "bottom",
    textAlign: "right",
    fontWeight: "600",
    paddingVertical: 10,

  },

  OrderItems: {
    padding: 40,
  },
});
