import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  wrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    borderStyle: "solid",
  },
  wrapperTitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "#F0F0F0",
    marginBottom: 10,
    color: "#000000",
    flex: 1,
    flexDirection: "row",
  },
  leftSection: {
    width: "80%",
    padding: 10,
  },
  rightSection: {
    width: "20%",
    backgroundColor: "#F0F0F0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize"
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  listDate: {
    color: "#777777",
    fontSize: 10,
  },
  listStatus: {
    padding: 5,
  },
});

export default style;
