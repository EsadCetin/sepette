import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/SignupScreenStyles";
import { auth, db } from "../firebase";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const SignupScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalVisible1, setModalVisible1] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
	const [modalVisible3, setModalVisible3] = useState(false);
	const [modalVisible4, setModalVisible4] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const Signup = async () => {
		await auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				setModalVisible1(true);
				saveUser();
			})
			.catch((error) => {
				if (error.code === "auth/invalid-email") {
					setModalVisible2(true);
				} else if (error.code === "auth/email-already-in-use") {
					setModalVisible3(true);
				} else if (error.code === "auth/weak-password") {
					setModalVisible4(true);
				}
			});
	};
	const saveUser = async () => {
		await db.collection("users").doc(auth?.currentUser?.uid).set({
			email: email,
			name: name,
			userUid: auth.currentUser.uid,
			profilePhoto:
				"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
		});
	};
	return (
		<DismissKeyboard>
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View style={styles.viewName}>
					<Text style={styles.textsepette}>sepette</Text>
					<Text style={styles.textSlogan}>sepette fırsat var</Text>
				</View>
				<View style={styles.componentsView}>
					<View style={styles.inputViewEmail}>
						<TextInput
							placeholder={"E-posta veya telefon numarası"}
							placeholderTextColor={"white"}
							selectionColor={"white"}
							selectionColor={"#009AFF"}
							style={styles.inputEmail}
							keyboardType="email-address"
							onChangeText={(text) => setEmail(text)}
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
							onChangeText={(text) => setPassword(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewUsername}>
						<TextInput
							placeholder={"Kullanıcı adı"}
							maxLength={16}
							placeholderTextColor={"white"}
							selectionColor={"#009AFF"}
							style={styles.inputUsername}
							onChangeText={(text) => setName(text)}
						></TextInput>
					</View>

					<View style={{ alignSelf: "center", alignItems: "center" }}>
						<TouchableOpacity onPress={() => setModalVisible(true)}>
							<Text style={styles.textTerm}>Kullanım Hüküm ve Koşulları</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() => Signup()}
						style={styles.signupButton}
					>
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
									sepette uygulamasıyla alışveriş yapabilmek için 18 yaşından
									büyük olmanız gerekmektedir.
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
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible1}
						onRequestClose={() => {
							setModalVisible1(!modalVisible1);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>
									Kayıt başarılı, şimdi profilini oluştur!
								</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => {
										setModalVisible1(!modalVisible1);
										navigation.navigate("SetProfileScreen");
									}}
								>
									<Text style={styles.textStyle}>Devam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible2}
						onRequestClose={() => {
							setModalVisible2(!modalVisible2);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>E-posta Adresi Geçersiz</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible2(!modalVisible2)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible3}
						onRequestClose={() => {
							setModalVisible3(!modalVisible3);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>
									E-posta adresi zaten kullanılıyor
								</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible3(!modalVisible3)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible4}
						onRequestClose={() => {
							setModalVisible4(!modalVisible4);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text style={styles.modalText}>Zayıf Şifre</Text>
								<TouchableOpacity
									style={[styles.ReadButton]}
									onPress={() => setModalVisible4(!modalVisible4)}
								>
									<Text style={styles.textStyle}>Tamam</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</View>
			</KeyboardAvoidingView>
		</DismissKeyboard>
	);
};

export default SignupScreen;
