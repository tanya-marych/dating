import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Navigation from './src/navigation/MainNavigation';

import store from './src/store/configureStore';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Navigation />
                </View>
            </Provider>
        );
    }
}
