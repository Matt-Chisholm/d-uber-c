import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./store";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EatsScreen from "./screens/EatsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<Stack.Navigator>
					<Stack.Screen
						name='HomeScreen'
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='MapScreen'
						component={MapScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='EatsScreen'
						component={EatsScreen}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
				<StatusBar style='auto' />
			</Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
