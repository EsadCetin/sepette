import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { db } from "../firebase";
import styles from "../assets/styles/ProductScreenStyles";
import { ActivityIndicator, ProgressBar } from "react-native-paper";

const ProductScreen = ({ navigation }) => {
	const [productName, setProductName] = useState("");
	const [productAbout, setProductAbout] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [sellerName, setSellerName] = useState("");
	const [ticketSold, setTicketSold] = useState("");
	const [requiredTicket, setRequiredTicket] = useState("");
	const [categories, setCategories] = useState("");
	const [productPhotos, setProductPhotos] = useState();
	const [loading, setLoading] = useState(true);
	const [producer, setProducer] = useState("");
	const getProduct = async () => {
		await db
			.collection("products")
			.doc("kKmM45aYRkPga7lkzb0V")
			.get()
			.then(function (doc) {
				if (doc.exists) {
					setProductName(doc.get("productName"));
					setProductAbout(doc.get("productAbout"));
					setProductPrice(doc.get("productPrice"));
					setSellerName(doc.get("sellerName"));
					setTicketSold(doc.get("ticketSold"));
					setRequiredTicket(doc.get("requiredTicket"));
					setCategories(doc.get("categories"));
					setProductPhotos(doc.get("coverPhoto"));
					setProducer(doc.get("producer"));
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
				<TouchableOpacity
					style={{
						justifyContent: "center",
						alignItems: "center",
						width: 35,
						height: 35,
						borderRadius: 35 / 2,
						alignSelf: "center",
						top: "18%",
						right: "6%",
						position: "absolute",
						backgroundColor: "grey",
					}}
				>
					<Image
						style={styles.tinyLogoFavorites}
						source={require("../assets/icons/notifications_white.png")}
					/>
				</TouchableOpacity>
				<Image
					style={{
						aspectRatio: 1,
						height: "30%",
						alignSelf: "center",
						marginTop: "15%",
					}}
					source={{ uri: productPhotos }}
				/>
				<Text
					style={{
						fontSize: 30,
						marginTop: "10%",
						marginLeft: "5%",
						fontFamily: "PoppinsMedium",
					}}
				>
					{productName}
				</Text>
				<Text
					style={{
						fontSize: 15,
						marginLeft: "6%",
						fontFamily: "Poppins",
						color: "#50A162",
					}}
				>
					{producer}
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
					{productPrice}₺
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
					{productAbout}
				</Text>

				<Text style={styles.ProductTicket}>
					<Image
						style={{ width: 15, height: 15 }}
						source={require("../assets/icons/ticket.png")}
					></Image>
					{ticketSold}/{requiredTicket}
				</Text>

				<View
					style={{
						position: "absolute",
						bottom: "5%",
						right: "5%",
						width: "90%",
						height: "3%",
					}}
				>
					<ProgressBar
						style={{ width: "100%", height: "100%" }}
						progress={requiredTicket / ticketSold / 10}
						color={"#7FDB93"}
					/>
				</View>
				<TouchableOpacity
					style={{
						position: "absolute",
						bottom: "5%",
						right: "5%",
						width: "90%",
						height: "3%",
						alignItems: "center",
					}}
				>
					<Text>Bilet Al</Text>
				</TouchableOpacity>
			</View>
		);
	}
};

export default ProductScreen;
