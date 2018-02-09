import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    halfBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    half: {
        flex: 0.5,
    },
    info: {
        marginVertical: 10,
    },
    infoTitle: {
        fontSize: 16,
        color: '#333333',
        lineHeight: 30,
    },
    infoText: {
        fontSize: 14,
        color: '#777777',
        lineHeight: 30,
    },
});
