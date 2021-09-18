import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";

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
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
