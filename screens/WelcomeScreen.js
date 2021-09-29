import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

const WelcomeScreen = ({ navigation }) => {
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
			<View style={styles.view}>
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
								katılabilmek için 18 yaşında (veya kendi ülkenizdeki eş değer
								asgari yaşta) veya daha büyük olmanız; kendi ülkenizde yasal
								sorumluluk yaşının altındaysanız veliniz veya vasinizden izin
								almış olmanız; bizimle bağlayıcı bir sözleşme imzalama yetkisine
								sahip olmanız ve geçerli kanunlar kapsamında bu yönde bir
								engelinizin olmaması ve Hizmet'in kullanılabilir olduğu bir
								ülkede ikamet etmeniz gerekmektedir. Ayrıca, torba'ya
								gönderdiğiniz her türlü kayıt bilgisinin gerçek, doğru, eksiksiz
								olduğuna ve bu bilgileri her zaman bu şekilde tutmayı kabul
								ettiğinize dair söz verirsiniz. Kendi ülkenizde yasal sorumluluk
								yaşının altındaysanız bu Şartlar'ı sizin adınıza veliniz veya
								vasiniz imzalamalıdır. Asgari yaş gereksinimlerine ilişkin ek
								bilgilere kayıt sürecinde ulaşabilirsiniz. Asgari yaş
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
				<StatusBar />
				<View style={styles.viewName}>
					<Text style={styles.textTorba}>torba</Text>
					<Text style={styles.textSlogan}>torbada fırsat var</Text>
				</View>
				<View style={styles.viewKaydol}>
					<TouchableOpacity style={styles.buttonKaydol}>
						<Text style={styles.textKaydol}>Kaydol</Text>
					</TouchableOpacity>
					<View style={styles.viewHaveAnAcc}>
						<Text style={styles.textHaveAnAcc}>Zaten bir hesabın var mı?</Text>
						<TouchableOpacity style={styles.buttonLogin}>
							<Text
								onPress={() => navigation.navigate("LoginScreen")}
								style={styles.textLogin}
							>
								Giriş Yap.
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.viewSocialSignUps}>
					<TouchableOpacity style={styles.buttonSocialFacebook}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/facebook.png")}
						/>
						<Text style={styles.textSocialFacebook}>
							Facebook ile giriş yap
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonSocialGoogle}>
						<Image
							style={styles.tinyLogo}
							style={{ marginLeft: "-1%" }}
							source={require("../assets/icons/google.png")}
						/>
						<Text style={styles.textSocialGoogle}>Google ile giriş yap</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonSocialApple}>
						<Image
							style={styles.tinyLogo}
							style={{ marginLeft: "-2%" }}
							source={require("../assets/icons/apple.png")}
						/>
						<Text style={styles.textSocialApple}>Apple ID ile giriş yap</Text>
					</TouchableOpacity>
				</View>
				<View style={{ alignSelf: "center", alignItems: "center" }}>
					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<Text style={styles.textTerm}>Kullanım Hüküm ve Koşulları</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewOurSocials}>
					<Text style={styles.textOurSocials}>Sosyal medyada Torba</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TouchableOpacity style={{ alignSelf: "center", marginTop: "2%" }}>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/instagram.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginStart: "20%", marginTop: "2%" }}>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/twitter.png")}
							/>
						</TouchableOpacity>
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
	buttonKaydol: {
		backgroundColor: "#DBB364",
		marginTop: "10%",
		height: "35%",
		width: "75%",
		alignSelf: "center",
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "center",
	},
	textKaydol: {
		fontFamily: "Poppins",
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFFFFF",
		alignSelf: "center",
	},
	viewKaydol: {
		height: "20%",
		width: "100%",
		alignSelf: "center",
	},
	viewHaveAnAcc: {
		flexDirection: "row",
		alignSelf: "center",
	},
	textHaveAnAcc: {
		fontFamily: "Poppins",
		fontSize: 16,
		color: "#FFFFFF",
		marginTop: "5%",
		alignSelf: "center",
	},
	buttonLogin: {
		fontFamily: "Poppins",
		fontSize: 16,
		color: "#FFFFFF",
		marginTop: "5%",
		alignSelf: "center",
	},
	textLogin: {
		fontFamily: "Poppins",
		fontSize: 16,
		color: "#DBB364",
		alignSelf: "center",
	},
	textTerm: {
		fontFamily: "Poppins",
		fontSize: 10,
		color: "white",
		alignSelf: "center",
	},
	viewSocialSignUps: {
		flexDirection: "column",
		height: "30%",
	},
	buttonSocialFacebook: {
		backgroundColor: "#1877F2",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		width: "60%",
		height: "25%",
		borderRadius: 21,
		marginTop: "2%",
	},
	buttonSocialGoogle: {
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		width: "60%",
		height: "25%",
		borderRadius: 21,
		marginTop: "5%",
	},
	buttonSocialApple: {
		backgroundColor: "#000000",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		width: "60%",
		height: "25%",
		borderRadius: 21,
		marginTop: "5%",
	},
	textSocialFacebook: {
		fontFamily: "PoppinsMedium",
		fontSize: 16,
		fontWeight: "600",
		color: "#FFFFFF",
		marginStart: "3%",
		marginTop: "3%",
	},
	textSocialGoogle: {
		fontFamily: "PoppinsMedium",
		fontSize: 18,
		fontWeight: "600",
		color: "#000000",
		marginStart: "3%",
		marginTop: "3%",
	},
	textSocialApple: {
		fontFamily: "PoppinsMedium",
		fontSize: 17,
		fontWeight: "600",
		color: "#FFFFFF",
		marginStart: "3%",
		marginTop: "3%",
	},
	viewOurSocials: { height: "15%" },
	textOurSocials: {
		fontFamily: "Poppins",
		fontSize: 16,
		alignSelf: "center",
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
		backgroundColor: "#DBB364",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});

export default WelcomeScreen;
