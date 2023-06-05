import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    flexDirection: "row",
    marginHorizontal: 25,
    paddingHorizontal: 10,
  },
  btn: {
    margin: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  btnTxt: {
    width: 150,
    backgroundColor: "gray",
    textAlign: "center",
    padding: 10,
    borderRadius: 50,
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 15,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingBottom: 8,
  },
});

export default styles;
