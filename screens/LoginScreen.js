import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/LoginScreenStyles";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const LoginScreen = ({ navigation }) => {
	return (
		<DismissKeyboard>
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View>
					<Text style={styles.textsepette}>sepette</Text>
					<Text style={styles.textSlogan}>sepetteda fırsat var</Text>
				</View>
				<View style={styles.componentsView}>
					<View style={styles.inputViewEmail}>
						<TextInput
							placeholder={"E-posta veya telefon numarası"}
							placeholderTextColor={"white"}
							selectionColor={"white"}
							style={styles.inputEmail}
							keyboardType="email-address"
						></TextInput>
					</View>
					<View style={styles.inputViewPassword}>
						<TextInput
							placeholder={"Şifre"}
							maxLength={16}
							placeholderTextColor={"white"}
							selectionColor={"#009AFF"}
							style={styles.inputPassword}
							secureTextEntry={true}
						></TextInput>
					</View>
					<View>
						<TouchableOpacity style={styles.viewForgotPassword}>
							<Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={styles.loginButton}
						onPress={() => navigation.navigate("HomeScreen")}
					>
						<Text style={styles.textLoginButton}>Giriş Yap</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};

export default LoginScreen;
