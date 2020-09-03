import React, { useState } from "react";
import { View } from "react-native";
import * as Yup from "yup";
import axios from "axios";

import { AppForm, AppFormField, SubmitButton } from "../default/forms";

import Styles from "../../style/Styles";
import AsyncStorage from "@react-native-community/async-storage";
import AppButton from "../default/AppButton";

const validationSchema = Yup.object().shape({
  // email: Yup.string().required().email().label("Email"), //off for development
  // password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen({ navigation }) {
  const [error, setError] = useState();

  const handleSignup = (values) => {
    axios
      .post("https://virtual-waiter-backend.herokuapp.com/signup", values) //use localhost for IOS simulator
      .then(async ({ data: { token } }) => {
        const bearer = "Bearer " + token;
        axios.defaults.headers.common["Authorization"] = bearer;
        await AsyncStorage.setItem("token", bearer);
        // dispatch(setAccount(token))  //setAccount thru redux
        navigation.navigate("Resturant");
      })
      .catch(() => {
        // setSubmitting(false); //formik setsubmitting callback
        setError("Wrong username or password");
        setTimeout(() => {
          setError(null);
        }, 2500);
      });
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.login}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSignup(values)}
          validationSchema={validationSchema}
        >
          {/* {error && ( //Alert from Material UI Lab
            <Alert severity="error" className={classes.alert}>
              {error}
            </Alert>
          )} */}
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
          <SubmitButton title="Signup" />
          <AppButton title="Login" onPress={handleLogin} />
        </AppForm>
      </View>
    </View>
  );
}
