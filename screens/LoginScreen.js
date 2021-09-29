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
import styles from "../assets/styles/LoginScreenStyles";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

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
			<DismissKeyboard>
				<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
					<StatusBar />
					<View>
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
							></TextInput>
						</View>
						<View>
							<TouchableOpacity style={styles.viewForgotPassword}>
								<Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.loginButton}>
							<Text style={styles.textLoginButton}>Giriş Yap</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</DismissKeyboard>
		);
	}
};

export default WelcomeScreen;
