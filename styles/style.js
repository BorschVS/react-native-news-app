import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "#333",
    fontFamily: "roboto-bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: "roboto-bold",
  },
  text: {
    fontFamily: "roboto-regular",
    fontSize: 16,
  },
  horisontalFlexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
