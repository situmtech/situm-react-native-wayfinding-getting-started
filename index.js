/* eslint-disable prettier/prettier */
/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { NavigationMap, registerScreens, getNavigationList } from './src/app/screens/navigation';

registerScreens();
Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
        topBar: {
            title: {
                color: 'black',
            },
            background: {
                color: '#eee',
            },
        },
    });
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
});

