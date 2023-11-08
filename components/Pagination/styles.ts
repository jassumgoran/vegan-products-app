import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
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
    whiteSpace: "nowrap",
    flex: 1,
    textAlign: "center",
    color: "black",
    fontSize: 14,
  },
});
