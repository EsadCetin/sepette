import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#009AFF",
		flexDirection: "column",
		flex: 1,
	},
	viewName: {
		alignItems: "center",
	},
	textsepette: {
		fontFamily: "Yellowtail",
		fontSize: windowWidth / 4,
		marginTop: windowHeight / 8,
		color: "#ABEBC6",
		alignSelf: "center",
		justifyContent: "center",
	},
	textSlogan: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "#FFFFFF",
		alignSelf: "center",
	},
	componentsView: { height: "100%" },
	inputViewEmail: {
		marginTop: "15%",
		height: windowHeight / 10,
		width: "75%",
		backgroundColor: "#ABEBC6",
		borderRadius: 20,
		alignSelf: "center",
	},
	inputViewPassword: {
		height: windowHeight / 10,
		width: "75%",
		backgroundColor: "#ABEBC6",
		borderRadius: 20,
		alignSelf: "center",
		marginTop: "5%",
	},
	inputEmail: {
		fontFamily: "Poppins",
		color: "white",
		fontSize: windowWidth / 22,
		alignSelf: "center",
		height: "100%",
		width: "100%",
		marginStart: "6%",
		alignItems: "center",
		flexDirection: "row",
	},
	inputPassword: {
		fontFamily: "Poppins",
		color: "white",
		fontSize: windowWidth / 22,
		alignSelf: "center",
		height: "100%",
		width: "100%",
		marginStart: "6%",
		alignItems: "center",
		flexDirection: "row",
	},
	viewForgotPassword: {
		alignSelf: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	forgotPassword: {
		alignSelf: "center",
		padding: windowHeight / 30,
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "white",
	},
	loginButton: {
		width: "60%",
		height: windowHeight / 10,
		backgroundColor: "#ABEBC6",
		borderRadius: 7,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	textLoginButton: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "white",
	},
});
