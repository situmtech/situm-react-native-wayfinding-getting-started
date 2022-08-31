/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    floating_view: {
        position: 'absolute',
        backgroundColor: 'lightpink',
        padding: 10,
        alignSelf: 'flex-end',
    },
    container: {
        flex: 10,
    },
    mapview: {
        width: '100%',
        height: '100%',
    },
    mapview_container: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});