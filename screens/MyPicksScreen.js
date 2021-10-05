import React from "react";
import { View, Text } from "react-native";
import styles from "../assets/styles/MyPicksScreenStyles";
const MyPicksScreen = () => {
	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Seçtiklerim</Text>
			</View>
		</View>
	);
};

export default MyPicksScreen;
