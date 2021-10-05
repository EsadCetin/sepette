import React from "react";
import { View, Text } from "react-native";
import styles from "../assets/styles/FavoritesScreenStyles";
const FavoritesScreen = () => {
	return (
		<View style={styles.view}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Favorilerim</Text>
			</View>
		</View>
	);
};

export default FavoritesScreen;
