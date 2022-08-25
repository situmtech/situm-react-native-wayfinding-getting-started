/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import { NavigationMap } from '../navigation';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import { MapView } from '@situm/react-native-wayfinding';
import { SITUM_USER, SITUM_API_KEY, GOOGLE_API_KEY, BUILDING_ID } from '../../config';

export const SimpleMapScreen = (props: { componentId: string; }) => {

    const timeout = 2000;

    const enableBackButton = () => {
        console.log('Enabling back button');
        NavigationMap.SimpleMapScreen.options.hardwareBackButton.popStackOnPress = true;
        Navigation.mergeOptions(props.componentId, NavigationMap.SimpleMapScreen.options);
        NavigationMap.SimpleMapScreen.options.hardwareBackButton.popStackOnPress = false;
    };

    const onPressBack = () => {
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: NavigationMap.Home.name,
                            },
                        },
                    ],
                },
            },
        });
    }

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

    useEffect(() => {
        Navigation.mergeOptions(props.componentId, NavigationMap.SimpleMapScreen.options);
    }, [props.componentId]);

    if (Platform.OS === 'android') {
        setTimeout(() => {
            enableBackButton();
        }, timeout);
    }

    return (
        <View style={styles.screencontainer}>
            <View style={styles.mapcontainer}>
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
            </View>
            {Platform.OS === 'ios' && (
                <View style={styles.button}>
                    <Button title="Back" onPress={onPressBack} />
                </View>
            )}

        </View>
    );
};
