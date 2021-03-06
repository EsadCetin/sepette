import React, { useState } from "react";
import { TextInput, TouchableWithoutFeedback } from "react-native";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/EditProfileScreenStyles";
import { auth, db } from "../firebase";
import { ActivityIndicator } from "react-native-paper";
import { Image } from "react-native";

const EditProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [adress, setAdress] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [profilePhoto, setProfilePhoto] = useState();
	const [name2, setName2] = useState("");
	const [adress2, setAdress2] = useState("");
	const [email2, setEmail2] = useState("");
	const [phoneNumber2, setPhoneNumber2] = useState("");
	const [loading, setLoading] = useState(true);
	const getUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setAdress(doc.get("adress"));
					setEmail(doc.get("email"));
					setPhoneNumber(doc.get("phoneNumber"));
					setProfilePhoto(doc.get("profilePhoto"));
					setLoading(false);
				}
			});
	};
	getUser();
	const updateUser = async () => {
		await db.collection("users").doc(auth?.currentUser?.uid).update({
			name: name2,
			adress: adress2,
			email: email2,
			phoneNumber: phoneNumber2,
		});
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
			<View style={styles.view}>
				<View style={styles.Header}>
					<View>
						<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
							<Image
								style={styles.backLogo}
								source={require("../assets/icons/back.png")}
							/>
						</TouchableWithoutFeedback>
					</View>
					<Text style={styles.HeaderText}>Bilgilerim</Text>
				</View>

				<Avatar
					rounded
					size={120}
					source={require("../assets/icons/avatar.png")}
					containerStyle={styles.Avatar}
				/>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder={name}
						onChangeText={(text) => setName2(text)}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder={adress}
						onChangeText={(text) => setAdress2(text)}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder={email}
						onChangeText={(text) => setEmail2(text)}
					></TextInput>
				</View>
				<View style={styles.Bar}>
					<TextInput
						style={styles.Text}
						placeholder={phoneNumber}
						onChangeText={(text) => setPhoneNumber2(text)}
					></TextInput>
				</View>
				<View>
					<TouchableOpacity style={styles.updateButton} onPress={updateUser}>
						<Text style={styles.textUpdateButton}>G??ncelle</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};

export default EditProfileScreen;
