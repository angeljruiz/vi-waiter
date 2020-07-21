import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./components/Main/MainPage";
import LoginPage from "./components/Login/LoginPage";
import ItemPage from "./components/Item/ItemPage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Checkout/Checkout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Resturant" component={MainPage} />
        <Stack.Screen name="Item" component={ItemPage} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="Checkout" component={CheckoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
