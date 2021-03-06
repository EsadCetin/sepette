import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	backLogo: {
		marginTop: "5%",
		marginLeft: "10%",
		justifyContent: "center",
		width: 30,
		height: 30,
	},
	Header: {
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#009AFF",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	HeaderText: {
		alignSelf: "center",
		textAlign: "center",
		marginLeft: "2%",
		marginTop: "2%",
		width: "60%",
		fontFamily: "Yellowtail",
		fontSize: 35,
		color: "#ABEBC6",
	},
	Text: {
		marginTop: "5%",
		fontSize: 25,
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
		height: windowHeight / 10,
		width: "90%",
		backgroundColor: "#ABEBC6",
		borderRadius: 15,
		alignSelf: "center",
		marginBottom: "6%",
	},
	updateButton: {
		marginTop: "5%",
		width: "40%",
		height: windowHeight / 12,
		backgroundColor: "#ABEBC6",
		borderRadius: 10,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	textUpdateButton: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "white",
	},
});
