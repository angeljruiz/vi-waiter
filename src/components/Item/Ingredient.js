import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import defaultStyles from "../../config/styles";

export default function Ingredient({ name, price, last, selected, onPress }) {
  return (
    <ListItem 
      containerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 0,
      }}
      bottomDivider={!last} >
      
      <ListItem.CheckBox title={name} titleStyle={styles.ItemName} 
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='green'
        checked={selected}
        containerStyle={styles.Container} 
        onPress={onPress}
      />
      {price && 
            <ListItem.Subtitle style={styles.ItemSubtitle}>{`$${price / 100}`}</ListItem.Subtitle>
      }

    </ListItem>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    backgroundColor: defaultStyles.colors.background,
    borderWidth: 0
  },
  ItemSubtitle: {
    color: "grey",
    fontSize: 14,
  },
  ItemName: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-start'
  },
});