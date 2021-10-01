import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../firebase";
import styles from "../assets/styles/MyProductsScreenStyles";
import firebase from "firebase/app";

export default function MyProductsScreen({ navigation }) {
	const [products, setProducts] = useState([]);

	const onPressProduct = (item) => {
		addListenersArray(item).then(() => {
			navigation.navigate("Eighth Screen", { item });
		});
	};

	const addListenersArray = async (item) => {
		await db
			.collection("products")
			.doc(item.key)
			.update({
				products: firebase.firestore.FieldValue.arrayUnion(
					auth?.currentUser?.uid
				),
			});
	};

	const DATA = products.map(
		({
			id,
			data: { coverPhoto, productName, sellerName, requiredTicket, ticketSold },
		}) => {
			return {
				key: id,
				image: coverPhoto,
				name: productName,
				requiredTicket: requiredTicket,
				ticketSold: ticketSold,
				seller: sellerName,
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

	return (
		<SafeAreaView style={styles.ProductScreen}>
			<View style={styles.Header}>
				<Text style={styles.HeaderText}>Ürünlerim</Text>
			</View>
			<FlatList
				data={DATA}
				renderItem={({ item }) => (
					<View>
						<TouchableOpacity>
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
							<Text style={styles.ProductTicket}>
								<Image
									style={{ width: 15, height: 15 }}
									source={require("../assets/icons/ticket.png")}
								></Image>
								{item.ticketSold}/{item.requiredTicket}
							</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
