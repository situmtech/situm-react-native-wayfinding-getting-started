/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Button, Platform } from 'react-native';
import { NavigationMap } from '../navigation';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import { MapView } from '@situm/react-native-wayfinding';
import { SITUM_USER, SITUM_API_KEY, GOOGLE_API_KEY, BUILDING_ID } from '../../config';

export const SimpleMapScreen = (props: { componentId: string; }) => {

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
        console.log("Map is ready now:" + event);
    };

    const onFloorChange = (event: any) => {
        console.log("on floor change detected: " + event);
    };

    const onPoiSelected = (event: any) => {
        console.log("on poi selected detected: " + event);
    };

    const onPoiDeselected = (event: any) => {
        console.log("on poi deselected detected: " + event);
    };

    const onNavigationRequested = (event: any) => {
        console.log("on navigation requested detected: " + event);
    };

    const onNavigationError = (event: any) => {
        console.log("on navigation error detected: " + event);
    };

    const onNavigationFinished = (event: any) => {
        console.log("on navigation finished detected: " + event);
    };

    useEffect(() => {
        Navigation.mergeOptions(props.componentId, NavigationMap.SimpleMapScreen.options);
    }, [props.componentId]);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containermap}>
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
