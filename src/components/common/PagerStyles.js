import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 40,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    arrow: {
        width: 10,
        height: '100%',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowImg: {
        width: 10,
        height: 20,
    },
    pageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
