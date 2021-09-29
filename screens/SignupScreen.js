import React, { useState } from "react";
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
	Modal,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import KeyboardWrapper from "../components/KeyboardWrapper";
import styles from "../assets/styles";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const SignupScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
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
								selectionColor={"#50A162"}
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
						<View style={styles.inputViewUsername}>
							<TextInput
								placeholder={"Kullanıcı adı"}
								maxLength={16}
								placeholderTextColor={"white"}
								selectionColor={"#50A162"}
								style={styles.inputUsername}
							></TextInput>
						</View>

						<View style={{ alignSelf: "center", alignItems: "center" }}>
							<TouchableOpacity onPress={() => setModalVisible(true)}>
								<Text style={styles.textTerm}>Kullanım Hüküm ve Koşulları</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.signupButton}>
							<Text style={styles.textSignupButton}>Kaydol</Text>
						</TouchableOpacity>
						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								Alert.alert("Modal has been closed.");
								setModalVisible(!modalVisible);
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.modalText}>
										torba Hizmeti'ni kullanabilmek ve herhangi bir çekilişe
										katılabilmek için 18 yaşında (veya kendi ülkenizdeki eş
										değer asgari yaşta) veya daha büyük olmanız; kendi ülkenizde
										yasal sorumluluk yaşının altındaysanız veliniz veya
										vasinizden izin almış olmanız; bizimle bağlayıcı bir
										sözleşme imzalama yetkisine sahip olmanız ve geçerli
										kanunlar kapsamında bu yönde bir engelinizin olmaması ve
										Hizmet'in kullanılabilir olduğu bir ülkede ikamet etmeniz
										gerekmektedir. Ayrıca, torba'ya gönderdiğiniz her türlü
										kayıt bilgisinin gerçek, doğru, eksiksiz olduğuna ve bu
										bilgileri her zaman bu şekilde tutmayı kabul ettiğinize dair
										söz verirsiniz. Kendi ülkenizde yasal sorumluluk yaşının
										altındaysanız bu Şartlar'ı sizin adınıza veliniz veya
										vasiniz imzalamalıdır. Asgari yaş gereksinimlerine ilişkin
										ek bilgilere kayıt sürecinde ulaşabilirsiniz. Asgari yaş
										gereksinimlerini karşılamıyorsanız torba sizi bir kullanıcı
										olarak kaydedemez.
									</Text>
									<TouchableOpacity
										style={[styles.ReadButton]}
										onPress={() => setModalVisible(!modalVisible)}
									>
										<Text style={styles.textStyle}>Okudum, onaylıyorum.</Text>
									</TouchableOpacity>
								</View>
							</View>
						</Modal>
					</View>
				</KeyboardAvoidingView>
			</DismissKeyboard>
		);
	}
};

export default SignupScreen;
