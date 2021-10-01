import React from "react";
import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/styles/HomeScreenStyles";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.view}>
			<View style={styles.BottomBar}>
				<TouchableOpacity style={{ marginLeft: "5%" }}>
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
				<TouchableOpacity
					style={{ marginRight: "5%" }}
					onPress={() => navigation.navigate("ProfileScreen")}
				>
					<Image
						style={styles.tinyBorderLogo}
						source={require("../assets/icons/profile.png")}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeScreen;
