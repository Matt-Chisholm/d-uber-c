import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
	const dispatch = useDispatch();

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
					placeholder='Where From?'
					fetchDetails={true}
					enablePoweredByContainer={false}
					minLength={2}
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={400}
					returnKeyType={"search"}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null));
					}}
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
