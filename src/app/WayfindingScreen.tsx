import React, {Component, useState} from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { MapView } from '@situm/react-native-wayfinding';
import styles from './styles';
import { SITUM_USER, SITUM_API_KEY, BUILDING_ID, GOOGLE_API_KEY } from './config';

interface IWayfindingScreenProps {
    index: Number,
}

interface IWayfindingScreenState {
    isMapLoaded : boolean,
}

class WayfindingScreen extends Component<IWayfindingScreenProps, IWayfindingScreenState> {
    
    constructor(props: IWayfindingScreenProps) {
        super(props);
        
        this.state = {
            isMapLoaded: false,
        };

        this.loadMap = this.loadMap.bind(this);        
        this.onMapReady = this.onMapReady.bind(this);
        this.onFloorChange = this.onFloorChange.bind(this);
        this.onPoiDeselected = this.onPoiSelected.bind(this);
        this.onPoiDeselected = this.onPoiDeselected.bind(this);
        this.onNavigationRequested = this.onNavigationRequested.bind(this);
        this.onNavigationError = this.onNavigationError.bind(this);
        this.onNavigationFinished = this.onNavigationFinished.bind(this);
    }

    loadMap() {
        this.setState((previousState, props) => ({
            isMapLoaded: !previousState.isMapLoaded,
          }));
    }

    onMapReady = (event: any) => {
        console.log("Map is ready now:" + JSON.stringify(event.nativeEvent));
    };

    onFloorChange = (event: any) => {
        console.log("on floor change detected: " + JSON.stringify(event.nativeEvent));
    };

    onPoiSelected = (event: any) => {
        console.log("on poi selected detected: " + JSON.stringify(event.nativeEvent));
    };

    onPoiDeselected = (event: any) => {
        console.log("on poi deselected detected: " + JSON.stringify(event.nativeEvent));
    };

    onNavigationRequested = (event: any) => {
        console.log("on navigation requested detected: " + JSON.stringify(event.nativeEvent));
    };

    onNavigationError = (event: any) => {
        console.log("on navigation error detected: " + JSON.stringify(event.nativeEvent));
    };

    onNavigationFinished = (event: any) => {
        console.log("on navigation finished detected: " + JSON.stringify(event.nativeEvent));
    };

    componentDidMount(): void {        
        setTimeout(
            () => this.loadMap(), 
            500
          );
    }

    render() {  
        {{ console.log("trying to load map on index: " + this.props.index ) }}
        if (!this.state.isMapLoaded) {
            return <Text>Wait until map is fully loaded</Text>
        } else {
            return (
                <View style={styles.container}>
                    <MapView
                        style={styles.mapview}
                        user={SITUM_USER}
                        apikey={SITUM_API_KEY}
                        googleApikey={GOOGLE_API_KEY}
                        buildingId={BUILDING_ID}
                        onMapReady={this.onMapReady}
                        onFloorChange={this.onFloorChange}
                        onPoiSelected={this.onPoiSelected}
                        onPoiDeselected={this.onPoiDeselected}
                        onNavigationRequested={this.onNavigationRequested}
                        onNavigationError={this.onNavigationError}
                        onNavigationFinished={this.onNavigationFinished}
                        iOSMapViewIndex={this.props.index.toString()}

                    />
                </View>
            );
        }
    }
};
export default WayfindingScreen;