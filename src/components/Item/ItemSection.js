import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../actions/app';
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text, Card } from "react-native-elements";

import Ingredient from "./Ingredient";

import defaultStyles from "../../config/styles";
import Item from "./Item";

function CardTitle({ name, required }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.Title}>{name}</Text>
        <Text style={styles.SectionSubText}>
          {required === "true" ? "Required" : "Optional"}
        </Text>
      </View>
      <Entypo name="chevron-with-circle-down" size={18} color="grey" />
    </View>
  );
}

export default function ItemSection({
  name, sectionIndex,
  required,
  ingredients,
  maxSelection,
}) {
  const dispatch = useDispatch();
  const item = useSelector(state=>state.app.item)
  const SelectIngredient = (name, index) => {
    console.log(name + ": Ingredient " + index)
    const sections = item.sections;
    const max = typeof maxSelection === 'undefined'? 1 : 
      parseInt(maxSelection);
    if( ingredients[index].selected==="true" ){
      ingredients[index].selected="false";}
    else { 
      ingredients[index].selected="true"; 
      if(max===1){
        for (var i = 0; i < ingredients.length; ++i) {
          if(i!==index){ingredients[i].selected="false"; }
        }
      } else {
        var count=0;
        for (var i = 0; i < ingredients.length; ++i) {
          if(ingredients[i].selected==="true"){count++}
        } 
        if(count>max){ingredients[index].selected="false"}

      }
  
    }
    sections[sectionIndex].ingredients=ingredients;
    item.sections=sections;
    console.log(item);
    dispatch(updateItem(item))
  }
  return (
    <>
      <Card containerStyle={styles.CardBody}>
        <CardTitle name={name} required={required} />
        <>
          {ingredients.map((ingredient, index, self) => {
            return (
              <Ingredient
                {...ingredient}
                key={index}
                last={index === self.length - 1}
                selected={ingredient.selected==="true"?true:false}
                onPress={()=>SelectIngredient(name,index)}
          
              />
            );
          })}
        </>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  CardBody: {
    backgroundColor: defaultStyles.colors.background,
  },
  SectionSubText: {
    color: "grey",
  },
  Title: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
});
