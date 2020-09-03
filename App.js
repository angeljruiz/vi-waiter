import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import MainPage from "./components/Main/MainPage";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Signup/SignupPage";
import ItemPage from "./components/Item/ItemPage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Checkout/Checkout";

const theme = {
  Button: {
    // titleStyle: {
    //   fontSize: 28,
    //   color: "black",
    // },
  },
};

const Stack = createStackNavigator();

(async () => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    axios.defaults.withCredentials = true;
    axios.defaults.credentials = "include";
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
})();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="Resturant" component={MainPage} />
          <Stack.Screen name="Item" component={ItemPage} />
          <Stack.Screen name="Cart" component={CartPage} />
          <Stack.Screen name="Checkout" component={CheckoutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
