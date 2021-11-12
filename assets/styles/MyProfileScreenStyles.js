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
		backgroundColor: "#ABEBC6",
		marginBottom: "6%",
		width: "90%",
		alignSelf: "center",
	},
});
