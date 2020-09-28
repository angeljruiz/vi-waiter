import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../actions/app';
import { TouchableOpacity, StyleSheet, View } from "react-native";

import { ListItem, Avatar, Text, Image, Icon } from "react-native-elements";
import defaultStyles from "../../config/styles";

const CartItemIngredient = (section) => {
  const ingredients=section.ingredients;
  var buffer="";
  for(var i=0; i<ingredients.length; ++i){
      if(ingredients[i].selected==="true"){
        if(buffer===""){
          buffer = ingredients[i].name
        } else {
            buffer = buffer + "; " + ingredients[i].name
        }
      }
  }
  return(buffer)

}

const CartPriceIngredient = (section) => {
    const ingredients=section.ingredients;
    var price=0;
    for(var i=0; i<ingredients.length; ++i){
        if(ingredients[i].selected==="true"){
          if(ingredients[i].price){
            price+=parseInt(ingredients[i].price)
          }
        }
    }
    return(price)
}

const CartPriceSections = (sections) => {
    var price=0;
    for(var i=0; i<sections.length; ++i){ 
        price += CartPriceIngredient(sections[i]);
    }
    return(price)
}

const QuantitySelect = ({onPressAdd, onPressMinus, onPressDelete, quantity}) => {
    return(
        <View style={styles.Quantity}>
        <Icon
            name='plus'
            type='font-awesome'
            iconStyle={styles.Icon}
            onPress={onPressAdd} />
        <Text>{quantity}</Text>
        <Icon
            name='minus'
            type='font-awesome'
            iconStyle={styles.Icon}
            onPress={onPressMinus} />
        <Icon
            name='trash'
            type='font-awesome'
            iconStyle={styles.Icon}
            onPress={onPressDelete} />
        </View>

    )
}

export default function CartItem({
  navigation,
  quantity,
  item: { name, price, sections, image },
}) {
  const dispatch = useDispatch();
  const SelectItem = () => {

  }
  var section_price=CartPriceSections(sections);
  return (
    <TouchableOpacity
      onPress={SelectItem}
    >
      <ListItem
        containerStyle={styles.Container}
        bottomDivider
      >
        <ListItem.Subtitle style={styles.Quantity}>
            {quantity}
        </ListItem.Subtitle>
        <ListItem.Content>
          <ListItem.Title style={styles.ItemName}>
            {name}
          </ListItem.Title>
          {sections && 
            sections.map((section, index)=>{
                const buffer = CartItemIngredient(section);
                if( buffer === "" ){
                    return (null)
                } else {
                return (
                    <ListItem.Subtitle style={styles.ItemDescription}>
                    {section.name}: {CartItemIngredient(section)}
                  </ListItem.Subtitle>
                )}

          })}
        </ListItem.Content>
        <ListItem.Title style={styles.Price}>
            ${price/100 + section_price/100}
          </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background
  },
  Quantity: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background,
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  ItemDescription: {
    color: "grey",
    fontSize: 14,
  },
  ItemName: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: 'black'
  },
  Price: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start',
    color: 'black'
  },
  ItemImage : {
    width: 50,
    height: 50,
    padding: 0,
  },
  Icon: {
    color: 'grey',
    fontSize:20,
    paddingHorizontal:5
  }
});