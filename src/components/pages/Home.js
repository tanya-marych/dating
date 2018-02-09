import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Styles from './HomeStyles';
import icons from '../../assets/icons';

export default class extends Component {
    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        const icon = icons[routeName.toLowerCase()];
        let title;

        switch (routeName) {
        case 'Search':
            title = 'поиск';
            break;
        case 'Messages':
            title = 'мои переписки';
            break;
        case 'Profile':
            title = 'профиль';
            break;
        case 'Favourite':
            title = 'избранные';
            break;
        case 'Views':
            title = 'кто смотрел';
            break;
        case 'Settings':
            title = 'настройки';
            break;
        default:
            title = 'выйти';
        }

        return {
            drawerLabel: title.toUpperCase(),
            drawerIcon: () => (
                <Image
                    source={icon}
                    style={Styles.icon}
                />
            ),
        };
    };

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.text}>HomeScreen</Text>
            </View>
        );
    }
}
