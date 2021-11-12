import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},
	Header: {
		justifyContent: "center",
		backgroundColor: "#009AFF",
		height: windowHeight / 10,
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
	},
	HeaderText: {
		alignSelf: "center",
		fontFamily: "Yellowtail",
		fontSize: 45,
		color: "#ABEBC6",
	},
	tinyLogo: {
		width: 30,
		height: 30,
		marginTop: "1%",
	},
	tinyLogoFavorites: {
		width: 20,
		height: 20,
	},

	tinyBorderLogo: {
		top: 5,
		width: 35,
		height: 35,
	},
	Product: {
		flexDirection: "row",
		width: windowWidth / 1.2,
		height: windowHeight / 6,
		alignSelf: "center",
		borderBottomWidth: 1,
	},
	ProductPhoto: {
		marginTop: "2%",
		marginLeft: "4%",
		width: "30%",
		aspectRatio: 1,
	},
	ProductName: {
		marginLeft: "6%",
		marginTop: "5%",
		fontSize: 18,
		fontFamily: "Poppins",
	},
	ProductPrice: {
		position: "absolute",
		right: "9%",
		bottom: "5%",
		fontSize: 14,
		fontFamily: "Poppins",
	},
	ProductSeller: {
		position: "absolute",
		alignSelf: "center",
		marginRight: "10%",
		top: "31%",
		fontSize: 12,
		fontFamily: "Poppins",
		color: "grey",
	},

	BottomBar: {
		position: "absolute",
		bottom: 0,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		height: "6%",
		borderTopWidth: 1,
	},
});
