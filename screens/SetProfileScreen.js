import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Modal,
	TextInput,
	TouchableWithoutFeedback,
} from "react-native";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/SetProfileScreenStyles";
import { auth, db } from "../firebase";
import { ActivityIndicator } from "react-native-paper";

const SetProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [profilePhoto, setProfilePhoto] = useState();
	const [adress, setAdress] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	const getUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setEmail(doc.get("email"));
					setProfilePhoto(doc.get("profilePhoto"));
					setLoading(false);
				}
			});
	};
	getUser();
	const updateUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.update({
				adress: adress,
				phoneNumber: phoneNumber,
			})
			.then(setModalVisible(!modalVisible));
	};
	if (loading) {
		return (
			<View
				style={{
					flexDirection: "row",
					alignSelf: "center",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<ActivityIndicator size="large" color="#009AFF" />
			</View>
		);
	} else {
		return (
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<View style={styles.Header}>
					<Text style={styles.HeaderText}>Profili Tamamla</Text>
				</View>
				<Avatar
					rounded
					size={170}
					source={require("../assets/icons/avatar.png")}
					containerStyle={styles.Avatar}
				/>

				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						defaultValue={name}
						editable={false}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder="Adresin"
						onChangeText={(text) => setAdress(text)}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						defaultValue={email}
						editable={false}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder="Telefon Numaran"
						onChangeText={(text) => setPhoneNumber(text)}
					></TextInput>
				</View>
				<View>
					<TouchableOpacity style={styles.updateButton} onPress={updateUser}>
						<Text style={styles.textUpdateButton}>Kaydet</Text>
					</TouchableOpacity>
				</View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Alışverişe Başlayabilirsin!</Text>
							<TouchableWithoutFeedback
								onPress={() => {
									setModalVisible(!modalVisible);
									navigation.navigate("HomeScreen");
								}}
							>
								<View style={styles.ReadButton}>
									<Text style={styles.textStyle}>Devam</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
				</Modal>
			</KeyboardAvoidingView>
		);
	}
};

export default SetProfileScreen;
