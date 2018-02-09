import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 355,
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
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
    copyContainer: {
        width: '100%',
        alignItems: 'center',
    },
    copyrights: {
        fontSize: 12,
        lineHeight: 20,
        color: '#adadad',
    },
    cardContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});
