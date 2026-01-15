import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },
    outer: {
        flex: 1,
    },
    center: {
        flex: 3,
    },
    left: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    right: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    leftText: {
        textAlign: 'left',
    },
    rightText: {
        textAlign: 'right',
    },
    leftImage: {

    },
    rightImage: {

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
    },
    headerImage: {
        height: 20,
        aspectRatio: '1/1',
    },
});