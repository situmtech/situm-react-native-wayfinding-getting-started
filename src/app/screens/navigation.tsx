/* eslint-disable prettier/prettier */

import { Navigation } from 'react-native-navigation';
import { Home } from './Home/index';
import { SimpleMapScreen } from './SimpleMapScreen/index';

export const NavigationMap: any = {
    Home: {
        name: 'Home',
        component: Home,
        options: {
            topBar: {
                title: {
                    text: 'Home',
                },
            },
        },
    },
    SimpleMapScreen: {
        name: 'SimpleMapScreen',
        component: SimpleMapScreen,
        options: {
            topBar: {
                title: {
                    text: 'Simple Map Screen',
                },
            },
        },
    },
};

export function registerScreens() {
    for (const key in NavigationMap) {
        Navigation.registerComponent(key, () => NavigationMap[key].component);
    }
}

export function getNavigationList() {
    const ignore = [NavigationMap.Home.name];
    const navigations = [];

    for (const key in NavigationMap) {
        if (ignore.includes(key)) {
            continue;
        }
        navigations.push({
            key: key,
            value: NavigationMap[key].options.topBar.title.text,
        });
    }

    return navigations;
}
