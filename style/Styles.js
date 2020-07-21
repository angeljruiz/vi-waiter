import { StyleSheet, Dimensions } from "react-native";

import Constants from "expo-constants";

export default Styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ECF0F1",
    padding: 12,
  },

  textInput: {
    height: 40,
    padding: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#20a0f0",
    borderWidth: 1,
    borderRadius: 20,
    color: "#f194ff",
    borderColor: "black",
  },

  login: {
    paddingBottom: 200,
  },
});
