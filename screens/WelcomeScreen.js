import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import styles from "../assets/styles/WelcomeScreenStyles";

const WelcomeScreen = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.view}>
			<StatusBar />
			<View>
				<Text style={styles.textTorba}>torba</Text>
				<Text style={styles.textSlogan}>torbada fırsat var</Text>
			</View>
			<View style={styles.viewKaydol}>
				<TouchableOpacity
					style={styles.buttonKaydol}
					onPress={() => navigation.navigate("SignupScreen")}
				>
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
					<Text style={styles.textSocialFacebook}>Facebook ile giriş yap</Text>
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
							engelinizin olmaması ve Hizmet'in kullanılabilir olduğu bir ülkede
							ikamet etmeniz gerekmektedir. Ayrıca, torba'ya gönderdiğiniz her
							türlü kayıt bilgisinin gerçek, doğru, eksiksiz olduğuna ve bu
							bilgileri her zaman bu şekilde tutmayı kabul ettiğinize dair söz
							verirsiniz. Kendi ülkenizde yasal sorumluluk yaşının altındaysanız
							bu Şartlar'ı sizin adınıza veliniz veya vasiniz imzalamalıdır.
							Asgari yaş gereksinimlerine ilişkin ek bilgilere kayıt sürecinde
							ulaşabilirsiniz. Asgari yaş gereksinimlerini karşılamıyorsanız
							torba sizi bir kullanıcı olarak kaydedemez.
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
	);
};

export default WelcomeScreen;
