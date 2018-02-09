import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';

import DrawerHeader from './drawer/DrawerHeader';

const user = {
    id: 1590,
    name: 'Валерий',
    age: 45,
    city: 'Москва',
    country: 'Россия',
    photo: 'https://loremflickr.com/g/400/400/girl?lock=1',
};

export default class extends Component {
    render() {
        return (
            <ScrollView>
                <DrawerHeader user={user} />
                <DrawerItems {...this.props} />
            </ScrollView>
        );
    }
}
