import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f5',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    flat: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 45,
    },
    pagerContainer: {
        height: 40,
        width: width - 40,
        marginHorizontal: 20,
        marginTop: 10,
    },
    spinner: {
        marginTop: 20,
    },
});
