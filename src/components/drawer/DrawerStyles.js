import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    username: {
        color: '#366cf7',
        fontSize: 18,
        letterSpacing: 2,
        fontFamily: 'Roboto',
    },
    location: {
        fontSize: 14,
        fontFamily: 'Roboto',
        letterSpacing: 2,
        lineHeight: 16,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
