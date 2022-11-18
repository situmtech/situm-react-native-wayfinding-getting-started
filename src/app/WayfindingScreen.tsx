import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { MapView } from '@situm/react-native-wayfinding';
import styles from './styles';
import { SITUM_USER, SITUM_API_KEY, BUILDING_ID, GOOGLE_API_KEY } from './config';

export default function WayfindingScreen() {
    const navigation = useNavigation();

    const onMapReady = (event: any) => {
        console.log("Map is ready now:" + JSON.stringify(event.nativeEvent));
    };

    const onFloorChange = (event: any) => {
        console.log("on floor change detected: " + JSON.stringify(event.nativeEvent));
    };

    const onPoiSelected = (event: any) => {
        console.log("on poi selected detected: " + JSON.stringify(event.nativeEvent));
    };

    const onPoiDeselected = (event: any) => {
        console.log("on poi deselected detected: " + JSON.stringify(event.nativeEvent));
    };

    const onNavigationRequested = (event: any) => {
        console.log("on navigation requested detected: " + JSON.stringify(event.nativeEvent));
    };

    const onNavigationError = (event: any) => {
        console.log("on navigation error detected: " + JSON.stringify(event.nativeEvent));
    };

    const onNavigationFinished = (event: any) => {
        console.log("on navigation finished detected: " + JSON.stringify(event.nativeEvent));
    };

    const showAlert = (title: string, msg: string) => {
        Alert.alert(title, msg);
    };

    return (
        <View style={styles.container}>
          <MapView
            style={styles.mapview}
            user="SITUM_USER"
            apikey="SITUM_APIKEY"
            googleApikey="GOOGLE_MAPS_APIKEY"
            buildingId="PUT_THE_BUILDING_IDENTIFIER_HERE"
            onMapReady={onMapReady}
            onFloorChange={onFloorChange}
            onPoiSelected={onPoiSelected}
            onPoiDeselected={onPoiDeselected}
            onNavigationRequested={onNavigationRequested}
            onNavigationError={onNavigationError}
            onNavigationFinished={onNavigationFinished}
          />
        </View>
      );
}