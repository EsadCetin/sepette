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
	textTerm: {
		fontFamily: "Poppins",
		fontSize: 10,
		color: "white",
		alignSelf: "center",
		marginTop: "5%",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	ReadButton: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#ABEBC6",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: "10%",
		textAlign: "center",
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
	inputViewUsername: {
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
	inputUsername: {
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
	signupButton: {
		width: "60%",
		height: windowHeight / 10,
		backgroundColor: "#ABEBC6",
		borderRadius: 7,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginTop: "5%",
	},
	textSignupButton: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "white",
	},
});
