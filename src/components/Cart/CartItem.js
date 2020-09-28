import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../actions/app';
import { TouchableOpacity, StyleSheet } from "react-native";

import { ListItem, Avatar, Text, Image } from "react-native-elements";
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

export default function CartItem({
  navigation,
  quantity,
  item: { name, price, sections, image },
}) {
  const dispatch = useDispatch();
  const SelectItem = () => {
    const item = {
      name,
      description,
      price,
      sections,
      image,
    };
    dispatch(updateItem(item));
    navigation.navigate("Item")
  }
  return (
    <TouchableOpacity
      onPress={SelectItem}
    >
      <ListItem
        containerStyle={styles.Container}
        bottomDivider
      >
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
          <ListItem.Subtitle style={styles.ItemDescription}>
            Quantity: {quantity}
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Chevron color="white" />
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background
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
  ItemImage : {
    width: 50,
    height: 50,
    padding: 0,
  }
});