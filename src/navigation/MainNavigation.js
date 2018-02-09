import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from '../components/pages/Home';
import Search from '../containers/pages/SearchContainer';

import Drawer from '../components/Drawer';

const RootDrawer = DrawerNavigator({
    Search: {
        screen: Search,
    },
    Messages: {
        screen: Home,
    },
    Profile: {
        screen: Home,
    },
    Favourite: {
        screen: Home,
    },
    Views: {
        screen: Home,
    },
    Settings: {
        screen: Home,
    },
    Exit: {
        screen: Home,
    },
}, {
    contentComponent: Drawer,
    drawerWidth: 270,
    contentOptions: {
        activeBackgroundColor: 'rgba(53,107,247,0.15)',
        itemStyle: {
            borderTopWidth: 1,
            borderTopColor: '#dbdbdb',
            padding: 17,
            paddingLeft: 0,
        },
        labelStyle: {
            margin: 0,
            fontSize: 16,
            letterSpacing: 2,
            color: '#333333',
            fontFamily: 'Roboto',
        },
        iconContainerStyle: {
            marginRight: 12,
        },
    },

});

export default class extends Component {
    render() {
        return (
            <RootDrawer />
        );
    }
}
