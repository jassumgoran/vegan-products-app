import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  labels: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: dimensions.text.large,
    fontWeight: "bold",
    color: colors.primary,
  },
  description: {
    fontSize: dimensions.text.medium,
    color: colors.text.secondary,
  },
  price: {
    fontSize: dimensions.text.medium,
    color: colors.text.primary,
  },
});
