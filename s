import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View style={{ backgroundColor: "red" }}>
				<Text>sa</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.view}>
				<StatusBar />
				<View style={styles.viewName}>
					<Text style={styles.textTorba}>torba</Text>
					<Text style={styles.textSlogan}>torbada fırsat var</Text>
				</View>
				<View style={styles.userInputs}>
					<View style={styles.input}>
						<TextInput
							placeholder={"E-posta veya telefon numarası"}
							placeholderTextColor={"white"}
							style={styles.epostaText}
						></TextInput>
					</View>
					<View style={styles.input}>
						<TextInput
							placeholder={"Şifre"}
							placeholderTextColor={"white"}
							style={styles.epostaText}
						></TextInput>
					</View>
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#50A162",
		flexDirection: "column",
		flex: 1,
	},
	viewName: {
		height: "35%",
		alignSelf: "center",
	},
	textTorba: {
		fontFamily: "Yellowtail",
		fontSize: 96,
		marginTop: "20%",
		color: "#DBB364",
		alignSelf: "center",
		width: "50%",
	},
	textSlogan: {
		fontFamily: "Poppins",
		fontSize: 18,
		color: "#FFFFFF",
		alignSelf: "center",
		width: "45%",
	},
	input: {
		backgroundColor: "#DBB364",
		width: "75%",
		alignSelf: "center",
		marginTop: "5%",
		height: "13%",
		borderRadius: 20,
		flexDirection: "row",
	},
	epostaText: {
		fontFamily: "Poppins",
		color: "white",
		fontSize: 18,
		alignSelf: "center",
		marginStart: "5%",
		width: "90%",
	},
	userInputs: {
		height: "65%",
	},
});

export default WelcomeScreen;
