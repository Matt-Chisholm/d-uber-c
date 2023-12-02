import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;
