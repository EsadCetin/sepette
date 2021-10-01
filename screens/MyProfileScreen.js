import React, { useState } from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../assets/styles/MyProfileScreenStyles";
import { db } from "../firebase";
import { ActivityIndicator } from "react-native-paper";

const MyProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [surName, setSurName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [profilePhoto, setProfilePhoto] = useState();
	const [loading, setLoading] = useState(true);

	const getProduct = async () => {
		await db
			.collection("users")
			.doc("ei0bH0PUTjhiElzdp3xF")
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setSurName(doc.get("surName"));
					setEmail(doc.get("email"));
					setPhoneNumber(doc.get("phoneNumber"));
					setProfilePhoto(doc.get("profilePhoto"));
					setLoading(false);
				}
			});
	};
	getProduct();
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
				<ActivityIndicator size="large" color="#50A162" />
			</View>
		);
	} else {
		return (
			<View style={styles.view}>
				<View style={styles.Header}>
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
						{surName}
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
