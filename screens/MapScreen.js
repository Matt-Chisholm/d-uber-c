import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Mapview, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";

const MapScreen = () => {
	const origin = useSelector((state) => state.nav.origin);

	return (
		<Mapview
			style={{ height: "50%", width: "100%" }}
			mapType='mutedStandard'
			initialRegion={{
				latitude: origin.location.lat,
				longitude: origin.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}>
			{origin?.location && (
				<Marker
					coordinate={{
						latitude: origin.location.lat,
						longitude: origin.location.lng,
					}}
					title='Origin'
					description={origin.description}
					identifier='origin'
				/>
			)}
		</Mapview>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
