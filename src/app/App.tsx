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
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native'
import HomeScreen from './HomeScreen';
import WayfindingScreen from './WayfindingScreen';

const App = () => {

    const stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Home' component={HomeScreen}/>
                <stack.Screen name='Wayfinding' component={WayfindingScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    )
};

export default App;
