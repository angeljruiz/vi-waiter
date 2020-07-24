import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  button: {
    backgroundColor: "#20a0f0",
    borderWidth: 1,
    borderRadius: 20,
    color: "#f194ff",
    borderColor: "black",
  },
};
