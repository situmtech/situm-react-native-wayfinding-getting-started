import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, Alert, Button} from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation();

    const loadWYFScreen = () => {
        navigation.navigate("Wayfinding")
    }

    return <View>
        <Button title='Click here to load WYF' onPress={loadWYFScreen}></Button>
    </View>

}