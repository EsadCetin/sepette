import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../assets/styles/ProfileScreenStyles";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { auth, db } from "../firebase";

const ProfileScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [image, setImage] = useState();
	const getUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setName(doc.get("name"));
					setImage(doc.get("profilePhoto"));
				}
			});
	};
	getUser();
	const onSignoutPress = () => {
		auth
			.signOut()
			.then(console.log("signed out"), navigation.navigate("WelcomeScreen"));
	};
	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Profilim</Text>
			</View>
			<ScrollView>
				<Avatar
					rounded
					size={120}
					source={{ uri: image }}
					containerStyle={styles.Avatar}
				/>
				<Text style={styles.Name}>{name}</Text>
				<View style={styles.ButtonBar}>
					<TouchableOpacity
						style={styles.Button}
						onPress={() => navigation.navigate("MyProfileScreen")}
					>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/user.png")}
						/>
						<Text style={styles.ButtonText}>Bilgilerim</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.ButtonBar}>
					<TouchableOpacity style={styles.Button}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/favorites.png")}
						/>
						<Text style={styles.ButtonText}>Beğendiklerim</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ButtonBar}>
					<TouchableOpacity style={styles.Button}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/wallet.png")}
						/>
						<Text style={styles.ButtonText}>Cüzdanım</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ButtonBar}>
					<TouchableOpacity style={styles.Button}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/notifications.png")}
						/>
						<Text style={styles.ButtonText}>Bildirimlerim</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ButtonBar}>
					<TouchableOpacity
						onPress={() => navigation.navigate("HelpScreen")}
						style={styles.Button}
					>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/chat.png")}
						/>
						<Text style={styles.ButtonText}>Yardım</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ButtonBar}>
					<TouchableOpacity
						onPress={() => navigation.navigate("AboutScreen")}
						style={styles.Button}
					>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/info.png")}
						/>
						<Text style={styles.ButtonText}>Uygulama Hakkında</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.ButtonBar}>
					<TouchableOpacity style={styles.Button}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/settings.png")}
						/>
						<Text style={styles.ButtonText}>Ayarlarım</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						onPress={() => onSignoutPress()}
						style={styles.LogOut}
					>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/logout.png")}
						/>
						<Text style={styles.LogOutText}>Çıkış Yap</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<View style={styles.BottomBar}>
				<TouchableOpacity
					style={{ marginLeft: "5%" }}
					onPress={() => navigation.navigate("HomeScreen")}
				>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/home.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/search.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/shopping_cart.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginRight: "5%" }}>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/profile.png")}
					/>
				</TouchableOpacity>
				<View
					style={{
						backgroundColor: "#ABEBC6",
						position: "absolute",
						width: 35,
						height: 35,
						bottom: 3,
						right: 20,
						borderRadius: 20,
						zIndex: -1,
					}}
				></View>
			</View>
		</View>
	);
};

export default ProfileScreen;
