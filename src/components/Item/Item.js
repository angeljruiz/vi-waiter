import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateItem } from '../../actions/app';
import { TouchableOpacity, StyleSheet } from "react-native";

import { ListItem, Avatar, Text, Image } from "react-native-elements";
import defaultStyles from "../../config/styles";

export default function Item({
  navigation,
  item: { name, description, price, sections, image },
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
          <ListItem.Subtitle style={styles.ItemDescription}>
            {description}
          </ListItem.Subtitle>
          <ListItem.Subtitle style={styles.ItemDescription}>
            ${parseInt(price)/100}
          </ListItem.Subtitle>
        </ListItem.Content>
        {image && <Image source={{uri: image}} style={styles.ItemImage}/>}
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