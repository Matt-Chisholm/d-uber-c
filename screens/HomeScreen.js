import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const HomeScreen = () => {
	console.log(GooglePlacesAutoComplete);
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
				<GooglePlacesAutocomplete
					placeholder='Search'
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						console.log(data, details);
					}}
					onFail={(error) => console.error(error)}
					query={{
						key: GOOGLE_MAPS_API_KEY,
						language: "en",
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;
