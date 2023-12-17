import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Mapview from "react-native-maps";

const MapScreen = () => {
	return (
		<View>
			<Mapview
				style={{ height: "100%", width: "100%" }}
				initialRegion={{
					latitude: 28.450627,
					longitude: -16.263045,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
