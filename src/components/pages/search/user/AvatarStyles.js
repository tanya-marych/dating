import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    avatarContainer: {
        height: 120,
        width: '100%',
        position: 'relative',
    },
    avatar: {
        height: 120,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    spinner: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        width: 40,
        height: 20,
        position: 'absolute',
        top: 10,
        left: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(51,51,51,0.5)',
        borderRadius: 5,
    },
    counter: {
        fontSize: 12,
        color: 'white',
    },
    photos: {
        width: 20,
        height: 15,
    },
    topContainer: {
        backgroundColor: '#ff1d6c',
        borderRadius: 5,
        width: 40,
        height: 22,
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        fontSize: 12,
        color: 'white',
    },
});
