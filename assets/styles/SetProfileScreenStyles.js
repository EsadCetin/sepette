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
		backgroundColor: "#009AFF",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	HeaderText: {
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 30,
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
		marginBottom: "5%",
	},
	updateButton: {
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
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: "10%",
		textAlign: "center",
	},
	ReadButton: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#ABEBC6",
	},
});
