import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Mapview from "react-native-maps";
import tw from "tailwind-react-native-classnames";

const MapScreen = () => {
	return (
		<Mapview
			style={{ height: "50%", width: "100%" }}
			mapType='mutedStandard'
			initialRegion={{
				latitude: 28.450627,
				longitude: -16.263045,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		/>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
