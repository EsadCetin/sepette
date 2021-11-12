import React, { useState } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { View, Text } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/MyProfileScreenStyles";
import { auth, db } from "../firebase";
import { ActivityIndicator } from "react-native-paper";

const MyProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [adress, setAdress] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [profilePhoto, setProfilePhoto] = useState();
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
					<View
						style={{
							alignSelf: "center",
							right: "5%",
							position: "absolute",
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("EditProfileScreen")}
						>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/edit.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<Avatar
					rounded
					size={120}
					source={require("../assets/icons/avatar.png")}
					containerStyle={styles.Avatar}
				/>
				<View style={styles.Bar}>
					<AutoSizeText
						style={styles.Text}
						fontSize={25}
						numberOfLines={1}
						mode={ResizeTextMode.max_lines}
					>
						{name}
					</AutoSizeText>
				</View>
				<View style={styles.Bar}>
					<AutoSizeText
						style={styles.Text}
						fontSize={25}
						numberOfLines={1}
						mode={ResizeTextMode.max_lines}
					>
						{adress}
					</AutoSizeText>
				</View>
				<View style={styles.Bar}>
					<AutoSizeText
						style={styles.Text}
						fontSize={25}
						numberOfLines={1}
						mode={ResizeTextMode.max_lines}
					>
						{email}
					</AutoSizeText>
				</View>
				<View style={styles.Bar}>
					<AutoSizeText
						style={styles.Text}
						fontSize={25}
						numberOfLines={1}
						mode={ResizeTextMode.max_lines}
					>
						{phoneNumber}
					</AutoSizeText>
				</View>
			</View>
		);
	}
};

export default MyProfileScreen;
