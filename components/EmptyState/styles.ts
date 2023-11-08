import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: dimensions.text.xlarge,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: dimensions.text.medium,
    color: colors.text.secondary,
  },
});
