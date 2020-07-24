import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as Yup from "yup";
import { ButtonGroup, Card, Text } from "react-native-elements";

import {
  AppForm,
  SubmitButton,
  AppFormField,
  AppFormPicker as Picker,
} from "../default/forms";

import defaultStyles from "../../config/styles";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const buttons = ["Hello", "World", "Buttons"];
const selectedIndex = 0;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Checkout() {
  const [selectedIndex, updateIndex] = useState(0);
  return (
    <React.Fragment>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Picker items={categories} name="category" placeholder="Category" />
        <Card
          title={
            <View style={styles.Title}>
              <Text h3 style={styles.Test}>
                Pick a side, asshole!
              </Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={64}
                color={defaultStyles.colors.medium}
                style={{ marginLeft: "auto" }}
              />
            </View>
          }
          icon="chevron-down"
        >
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 100 }}
            vertical
          />
        </Card>
        <SubmitButton title="Login" />
      </AppForm>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Title: {
    flexDirection: "row",
  },
});
