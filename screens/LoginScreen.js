import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	SafeAreaView,
	Dimensions,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import KeyboardWrapper from "../components/KeyboardWrapper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const WelcomeScreen = ({ navigation }) => {
	console.log(windowHeight);
	console.log(windowWidth);

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
			<DismissKeyboard>
				<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
					<StatusBar />
					<View style={styles.viewTorba}>
						<Text style={styles.textTorba}>torba</Text>
						<Text style={styles.textSlogan}>torbada fırsat var</Text>
					</View>
					<View style={styles.componentsView}>
						<View style={styles.inputViewEmail}>
							<TextInput
								placeholder={"E-posta veya telefon numarası"}
								placeholderTextColor={"white"}
								selectionColor={"white"}
								style={styles.inputEmail}
							></TextInput>
						</View>
						<View style={styles.inputViewPassword}>
							<TextInput
								placeholder={"Şifre"}
								maxLength={16}
								placeholderTextColor={"white"}
								selectionColor={"#50A162"}
								style={styles.inputPassword}
								onPressOut={Keyboard.dismiss()}
							></TextInput>
						</View>
						<TouchableOpacity style={styles.viewForgotPassword}>
							<Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.loginButton}>
							<Text style={styles.textLoginButton}>Giriş Yap</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</DismissKeyboard>
		);
	}
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: "#50A162",
		flexDirection: "column",
		flex: 1,
	},
	viewTorba: { height: windowHeight / 2 },
	textTorba: {
		fontFamily: "Yellowtail",
		fontSize: windowWidth / 4,
		marginTop: windowHeight / 8,
		color: "#DBB364",
		alignSelf: "center",
		justifyContent: "center",
		width: windowWidth / 2,
	},
	textSlogan: {
		fontFamily: "Poppins",
		fontSize: windowWidth / 22,
		color: "#FFFFFF",
		alignSelf: "center",
		width: "45%",
	},
	componentsView: { height: "100%" },
	inputViewEmail: {
		height: windowHeight / 10,
		width: "75%",
		backgroundColor: "#DBB364",
		borderRadius: 20,
		alignSelf: "center",
	},
	inputViewPassword: {
		height: windowHeight / 10,
		width: "75%",
		backgroundColor: "#DBB364",
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
	epostaText: {
		fontFamily: "Poppins",
		color: "white",
		fontSize: windowWidth / 22,
		alignSelf: "center",
		marginStart: "5%",
		width: "90%",
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
		backgroundColor: "#DBB364",
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

export default WelcomeScreen;
