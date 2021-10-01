import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
	view: {
		backgroundColor: "#fff",
		flex: 1,
	},

	tinyBorderLogo: {
		top: 5,
		width: 35,
		height: 35,
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
