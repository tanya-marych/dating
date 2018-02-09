import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
        paddingHorizontal: 15,
    },
    icon: {
        width: 30,
        height: 30,
    },
    side: {
        height: 65,
        width: 30,
        justifyContent: 'center',
    },
    text: {
        fontSize: 33,
        letterSpacing: 2,
        color: 'rgba(41,81,245,1)',
        fontFamily: 'Baloo',
    },
});
