import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  labelContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontSize: dimensions.text.xxxlarge,
    color: colors.primary,
    marginBottom: 5,
  },
  description: {
    fontSize: dimensions.text.medium,
    color: colors.text.secondary,
    marginBottom: 10,
  },
  text: {
    fontSize: dimensions.text.medium,
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  price: {
    marginLeft: 5,
    fontSize: dimensions.text.xlarge,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
});
