import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  labels: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 14,
    color: "black",
  },
});
