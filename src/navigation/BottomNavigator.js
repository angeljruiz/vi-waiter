import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser, updateLoginModal } from '../actions/user'

import {StyleSheet, Modal, View } from 'react-native';
import { SafeAreaView, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import * as Color from '../config/colors';

import MainPage from "../components/Main/MainPage";
import LoginPage from "../components/Login/LoginPage";
import SignupPage from "../components/Signup/SignupPage";
import ItemPage from "../components/Item/ItemPage";
import CartPage from "../components/Cart/CartPage";
import CheckoutPage from "../components/Checkout/Checkout";

const MenuStack = createStackNavigator();
const MenuStackScreen = ()=>(
  <MenuStack.Navigator headerMode='none'>
    <MenuStack.Screen name="Restaurant" component={MainPage}/>
    <MenuStack.Screen name="Item" component={ItemPage}/>
  </MenuStack.Navigator>
)

const CartStack = createStackNavigator();
const CartStackScreen = ()=>(
  <CartStack.Navigator headerMode='none'>
    <CartStack.Screen name="Cart" component={CartPage}/>
    <CartStack.Screen name="Checkout" component={CheckoutPage}/>
  </CartStack.Navigator>
)

const AccountStack = createStackNavigator();
const AccountStackScreen = ()=>(
  <AccountStack.Navigator headerMode='none'>
    <AccountStack.Screen name="Login" component={LoginPage}/>
    <AccountStack.Screen name="Signup" component={SignupPage}/>
  </AccountStack.Navigator>
)

const BottomTab = createBottomTabNavigator();
class BottomNavigator extends React.Component {
  
  render() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name){
              case "MENU": iconName= focused? 'restaurant' : 'restaurant'; 
                return <MaterialIcons name={iconName} size={size} color={color} />;
              case "CART": iconName= focused? 'cart' : 'cart-outline'; 
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//              case "ACCOUNT": iconName= focused? 'user' : 'user-o'; size=focused?size:size-5; 
//                return <FontAwesomeIcons name={iconName} size={size} color={color} />;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}       
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <BottomTab.Screen name='MENU' component={MenuStackScreen}/>
        <BottomTab.Screen name='CART' component={CartStackScreen}/>

      </BottomTab.Navigator>
    </NavigationContainer>
  );}
};

// <BottomTab.Screen name='ACCOUNT' component={AccountStackScreen}/>

const styles=StyleSheet.create({
  background:{
    backgroundColor: Color.tabBackground,      
  },
  bottomBar: {
    paddingBottom: 20,
    paddingTop: 5,
    backgroundColor: Color.tabBackground,   
  },
  tab: {
    fontSize: 8,
    color: "black",
    paddingBottom: 0,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ getUser, updateLoginModal }, dispatch)
}

const mapStateToProps = state => {
	return {
    user: state.user,
    loginModal: state.app.loginModal
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( BottomNavigator);