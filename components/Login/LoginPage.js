import React from "react";
import { View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../default/forms";

import Styles from "../../style/Styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.login}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => navigation.navigate("Resturant")}
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
          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </View>
  );
}
