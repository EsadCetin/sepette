import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../firebase";
import styles from "../assets/styles/ProductScreenStyles";
import { ActivityIndicator, ProgressBar } from "react-native-paper";

const ProductScreen = ({ navigation, route }) => {
	const { image, name, seller, price, about } = route.params.item;

	return (
		<View style={styles.view}>
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={{
					justifyContent: "center",
					alignItems: "center",
					width: 35,
					height: 35,
					borderRadius: 35 / 2,
					alignSelf: "center",
					top: "6%",
					left: "6%",
					position: "absolute",
					backgroundColor: "grey",
				}}
			>
				<Image
					style={styles.tinyLogoFavorites}
					source={require("../assets/icons/back.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					justifyContent: "center",
					alignItems: "center",
					width: 35,
					height: 35,
					borderRadius: 35 / 2,
					alignSelf: "center",
					top: "6%",
					right: "6%",
					position: "absolute",
					backgroundColor: "grey",
				}}
			>
				<Image
					style={styles.tinyLogoFavorites}
					source={require("../assets/icons/share.png")}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					justifyContent: "center",
					alignItems: "center",
					width: 35,
					height: 35,
					borderRadius: 35 / 2,
					alignSelf: "center",
					top: "12%",
					right: "6%",
					position: "absolute",
					backgroundColor: "grey",
				}}
			>
				<Image
					style={styles.tinyLogoFavorites}
					source={require("../assets/icons/favorites_page.png")}
				/>
			</TouchableOpacity>
			<Image
				style={{
					aspectRatio: 1,
					height: "30%",
					alignSelf: "center",
					marginTop: "15%",
				}}
				source={{ uri: image }}
			/>
			<Text
				style={{
					fontSize: 30,
					marginTop: "10%",
					marginLeft: "5%",
					fontFamily: "PoppinsMedium",
				}}
			>
				{name}
			</Text>
			<Text
				style={{
					fontSize: 15,
					marginLeft: "6%",
					fontFamily: "Poppins",
					color: "#009AFF",
				}}
			>
				{seller}
			</Text>
			<Text
				style={{
					fontSize: 25,
					color: "black",
					position: "absolute",
					top: "50%",
					right: "5%",
					fontFamily: "Poppins",
				}}
			>
				{price}₺
			</Text>
			<Text
				style={{
					fontSize: 30,
					borderTopWidth: 2,
					marginTop: "5%",
					width: "90%",
					alignSelf: "center",
					color: "black",
					borderColor: "grey",
					fontFamily: "Poppins",
				}}
			>
				Ürün Açıklaması
			</Text>
			<Text
				style={{
					color: "black",
					marginLeft: "5%",
					fontSize: 18,
					fontFamily: "Poppins",
				}}
			>
				{about}
			</Text>

			<TouchableOpacity
				style={{
					position: "absolute",
					bottom: "5%",
					right: "30%",
					width: "40%",
					height: "5%",
					borderRadius: 20,
					alignSelf: "center",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#009AFF",
				}}
			>
				<Text>Sepete Ekle</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProductScreen;
