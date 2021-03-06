import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import { ActivityIndicator } from "react-native-paper";
import MyPicksScreen from "./screens/MyPicksScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProductScreen from "./screens/ProductScreen";
import SetProfileScreen from "./screens/SetProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import HelpScreen from "./screens/HelpScreen";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator initialRouteName={WelcomeScreen}>
			<Stack.Screen
				name="WelcomeScreen"
				options={{ headerShown: false }}
				component={WelcomeScreen}
			/>
			<Stack.Screen
				name="LoginScreen"
				options={{ headerShown: false }}
				component={LoginScreen}
			/>
			<Stack.Screen
				name="SignupScreen"
				options={{ headerShown: false }}
				component={SignupScreen}
			/>
			<Stack.Screen
				name="MyProfileScreen"
				options={{ headerShown: false }}
				component={MyProfileScreen}
			/>
			<Stack.Screen
				name="EditProfileScreen"
				options={{ headerShown: false }}
				component={EditProfileScreen}
			/>
			<Stack.Screen
				name="ProfileScreen"
				options={{ headerShown: false }}
				component={ProfileScreen}
			/>
			<Stack.Screen
				name="MyPicksScreen"
				options={{ headerShown: false }}
				component={MyPicksScreen}
			/>
			<Stack.Screen
				name="FavoritesScreen"
				options={{ headerShown: false }}
				component={FavoritesScreen}
			/>
			<Stack.Screen
				name="HomeScreen"
				options={{ headerShown: false }}
				component={HomeScreen}
			/>
			<Stack.Screen
				name="ProductScreen"
				options={{ headerShown: false }}
				component={ProductScreen}
			/>
			<Stack.Screen
				name="SetProfileScreen"
				options={{ headerShown: false }}
				component={SetProfileScreen}
			/>
			<Stack.Screen
				name="AboutScreen"
				options={{ headerShown: false }}
				component={AboutScreen}
			/>
			<Stack.Screen
				name="HelpScreen"
				options={{ headerShown: false }}
				component={HelpScreen}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("./assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View
				style={{
					flexDirection: "row",
					alignSelf: "center",
					justifyContent: "center",
					flex: 1,
				}}
			>
				<ActivityIndicator size="large" color="#009AFF" />
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		);
	}
}
