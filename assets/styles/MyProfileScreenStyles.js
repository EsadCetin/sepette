import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	Header: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#50A162",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	HeaderText: {
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 30,
		color: "#DBB364",
	},
	Text: {
		marginLeft: "5%",
	},
	Avatar: {
		marginTop: windowHeight / 45,
		marginBottom: windowHeight / 45,
		alignSelf: "center",
	},
	tinyLogo: {
		width: 30,
		height: 30,
	},
	Bar: {
		height: "10%",
		borderRadius: 15,
		justifyContent: "center",
		backgroundColor: "#DBB364",
		marginBottom: "6%",
		width: "90%",
		alignSelf: "center",
	},
});
