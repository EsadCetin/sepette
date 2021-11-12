import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { db } from "../firebase";
import styles from "../assets/styles/HomeScreenStyles";

const HomeScreen = ({ navigation }) => {
	const [products, setProducts] = useState([]);
	const [favorite, setFavorite] = useState(false);

	const DATA = products.map(
		({
			id,
			data: { coverPhoto, productName, sellerName, price, productAbout },
		}) => {
			return {
				key: id,
				image: coverPhoto,
				name: productName,
				seller: sellerName,
				price: price,
				about: productAbout,
			};
		}
	);

	useEffect(() => {
		const subscriber = db.collection("products").onSnapshot((snapshot) =>
			setProducts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);

		return subscriber;
	}, []);

	if (favorite == true) {
		return (
			<SafeAreaView style={styles.view}>
				<View style={styles.Header}>
					<Text style={styles.HeaderText}>sepette</Text>
					<View
						style={{
							alignSelf: "center",
							top: "30%",
							right: "5%",
							position: "absolute",
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("FavoritesScreen")}
						>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/favorites_page.png")}
							/>
						</TouchableOpacity>
					</View>
					<View
						style={{
							alignSelf: "center",
							top: "30%",
							right: "13%",
							position: "absolute",
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("MyPicksScreen")}
						>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/bookmark.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<FlatList
					data={DATA}
					renderItem={({ item }) => (
						<View>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("ProductScreen", {
										item,
										about: item.about,
									})
								}
							>
								<View style={styles.Product}>
									<Image
										style={styles.ProductPhoto}
										source={{
											uri: item.image,
										}}
									></Image>

									<Text style={styles.ProductName}>{item.name}</Text>
								</View>
								<Text style={styles.ProductSeller}>{item.seller}</Text>
								<Text style={styles.ProductPrice}>{item.price}₺</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									setFavorite(!favorite),
										Alert.alert("Ürün Favorilerden Çıkartıldı");
								}}
								style={{
									justifyContent: "center",
									alignItems: "center",
									width: 25,
									height: 25,
									borderRadius: 25 / 2,
									alignSelf: "center",
									top: "10%",
									right: "10%",
									position: "absolute",
									backgroundColor: "grey",
								}}
							>
								<Image
									style={styles.tinyLogoFavorites}
									source={require("../assets/icons/favori.png")}
								/>
							</TouchableOpacity>
						</View>
					)}
				/>
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
				<View
					style={{
						backgroundColor: "#ABEBC6",
						position: "absolute",
						width: 35,
						height: 35,
						bottom: 3,
						left: 20,
						borderRadius: 20,
						zIndex: -1,
					}}
				></View>
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView style={styles.view}>
				<View style={styles.Header}>
					<Text style={styles.HeaderText}>sepette</Text>
					<View
						style={{
							alignSelf: "center",
							top: "30%",
							right: "5%",
							position: "absolute",
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("FavoritesScreen")}
						>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/favorites_page.png")}
							/>
						</TouchableOpacity>
					</View>
					<View
						style={{
							alignSelf: "center",
							top: "30%",
							right: "13%",
							position: "absolute",
						}}
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("MyPicksScreen")}
						>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/bookmark.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<FlatList
					data={DATA}
					renderItem={({ item }) => (
						<View>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("ProductScreen", {
										item,
										about: item.about,
									})
								}
							>
								<View style={styles.Product}>
									<Image
										style={styles.ProductPhoto}
										source={{
											uri: item.image,
										}}
									></Image>

									<Text style={styles.ProductName}>{item.name}</Text>
								</View>
								<Text style={styles.ProductSeller}>{item.seller}</Text>
								<Text style={styles.ProductPrice}>{item.price}₺</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									setFavorite(!favorite),
										Alert.alert("Ürün Favorilere Eklendi");
								}}
								style={{
									justifyContent: "center",
									alignItems: "center",
									width: 25,
									height: 25,
									borderRadius: 25 / 2,
									alignSelf: "center",
									top: "10%",
									right: "10%",
									position: "absolute",
									backgroundColor: "grey",
								}}
							>
								<Image
									style={styles.tinyLogoFavorites}
									source={require("../assets/icons/favorites_page.png")}
								/>
							</TouchableOpacity>
						</View>
					)}
				/>
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
							style={styles.tinyBorderLogo}
							source={require("../assets/icons/shopping_cart.png")}
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
				<View
					style={{
						backgroundColor: "#ABEBC6",
						position: "absolute",
						width: 35,
						height: 35,
						bottom: 3,
						left: 20,
						borderRadius: 20,
						zIndex: -1,
					}}
				></View>
			</SafeAreaView>
		);
	}
};

export default HomeScreen;
