import React from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";

import AppText from "../default/AppText";
import {
  AppForm,
  SubmitButton,
  AppFormField,
  AppFormPicker as Picker,
} from "../default/forms";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Checkout() {
  return (
    <React.Fragment>
      <AppText style={styles.Title}>PLEASE USE SQUARE LOL</AppText>
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
        <SubmitButton title="Login" />
      </AppForm>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  // Title: {
  //   fontSize: 64,
  // },
});
