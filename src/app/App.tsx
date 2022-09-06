/* eslint-disable prettier/prettier */


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { MapView } from '@situm/react-native-wayfinding';
import styles from './styles';
import { SITUM_USER, SITUM_API_KEY, BUILDING_ID, GOOGLE_API_KEY } from './config';

const App = () => {

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
            <TouchableOpacity style={styles.header} onPress={() => showAlert('Header', 'This is a header')}>
                <Text>Header</Text>
            </TouchableOpacity>
            <View style={styles.mapview_container}>
                <MapView style={styles.mapview}
                    user={SITUM_USER}
                    apikey={SITUM_API_KEY}
                    googleApikey={GOOGLE_API_KEY}
                    buildingId={BUILDING_ID}
                    onMapReadyCallback={onMapReady}
                    onFloorChangeCallback={onFloorChange}
                    onPoiSelectedCallback={onPoiSelected}
                    onPoiDeselectedCallback={onPoiDeselected}
                    onNavigationRequestedCallback={onNavigationRequested}
                    onNavigationError={onNavigationError}
                    onNavigationfinished={onNavigationFinished}
                />
                <TouchableOpacity style={styles.floating_view} onPress={() => showAlert('Floating window', 'This is a floating window over a map')}>
                    <Text>Floating</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.footer} onPress={() => showAlert('Footer', 'This is a footer')}>
                <Text>Footer</Text>
            </TouchableOpacity>
        </View>
    );
};

export default App;
