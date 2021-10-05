import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../assets/styles/ProfileScreenStyles";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Profilim</Text>
			</View>
			<ScrollView>
				<Avatar
					rounded
					size={120}
					source={require("../assets/icons/avatar.png")}
					containerStyle={styles.Avatar}
				/>
				<Text style={styles.Name}>Mehmet Esad Çetin</Text>
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
					<TouchableOpacity
						style={styles.Button}
						onPress={() => navigation.navigate("MyProductsScreen")}
					>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/shopping_cart.png")}
						/>
						<Text style={styles.ButtonText}>Ürünlerim</Text>
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
					<TouchableOpacity style={styles.Button}>
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
					<TouchableOpacity style={styles.LogOut}>
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
						style={{
							width: 54,
							height: 54,
							bottom: 20,
							alignSelf: "center",
						}}
						source={require("../assets/icons/add.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/chat.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={{ marginRight: "5%" }}>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/profileactive.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileScreen;
