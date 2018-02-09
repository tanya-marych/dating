import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Info from './Info';

import cards from '../../../assets/cards';
import Styles from './FooterStyles';

const info = {
    docs: {
        title: 'Документы',
        list: [
            'Политика конфиденциальности',
            'Пользовательское соглашение',
        ],
    },
    rules: {
        title: 'Справка',
        list: [
            'Правила сайта',
            'Правила оплаты ',
            'Безопасность',
        ],
    },
    support: {
        title: 'Поддержка',
        list: [
            'Контакты',
            'О проекте',
        ],
    },
};

export default class Footer extends Component {
    render() {
        return (
            <View style={Styles.container}>

                <Info info={info.docs} />

                <View style={Styles.halfBlock}>
                    <Info info={info.rules} half />
                    <Info info={info.support} half />
                </View>

                <View style={Styles.cardContainer}>
                    {cards.map(card => <Image source={card} key={card} style={Styles.card} />)}
                </View>

                <View style={Styles.copyContainer}>
                    <Text style={Styles.copyrights}>© Hello 2017. Все права защищены</Text>
                </View>
            </View>
        );
    }
}
