import { StyleSheet } from "react-native";
import dimensions from "../../constants/dimensions";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    padding: 5,
    alignItems: "center",
  },
  pageLabel: {
    marginHorizontal: 10,
    flex: 1,
    textAlign: "center",
    color: "black",
    fontSize: dimensions.text.medium,
  },
});
