/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { getNavigationList, NavigationMap } from '../navigation';
import { Navigation } from 'react-native-navigation';
import styles from './styles';

export const Home = (props: { componentId: string; }) => {

    const onItemPressed = (key: string) => {
        const component = NavigationMap[key];
        if (Platform.OS === 'ios') {
            Navigation.setRoot({
                root: {
                    component: component,
                },
            });
        } else {
            Navigation.push(props.componentId, {
                component: component,
            });
        }
    };

    useEffect(() => {
        Navigation.mergeOptions(props.componentId, NavigationMap.Home.options);
    }, [props.componentId]);

    return (
        <View style={styles.container}>
            <FlatList data={getNavigationList()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onItemPressed(item.key)}>
                        <Text style={styles.text}>{item.value}</Text>
                        <View style={styles.divider} />
                    </TouchableOpacity>
                )} />
        </View>
    );

};
