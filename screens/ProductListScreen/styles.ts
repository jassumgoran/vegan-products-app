import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
  },
  topbar: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: "white",
  },
  loadingIndicator: {
    flex: 1,
  },
});
