import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        margin: 5,
        width: 0.44 * width,
        height: 220,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flat: {
        alignItems: 'center',
        paddingTop: 15,
    },
    activity: {
        flex: 0.33,
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgba(255,255,255,0.30196078431372547)',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 10,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        color: 'rgba(41,81,245,1)',
        fontSize: 16,
        marginBottom: 3,
    },
    location: {
        fontSize: 13,
        color: 'rgba(38,38,38,1)',
    },
    online: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00f500',
        marginLeft: 5,
    },
});
