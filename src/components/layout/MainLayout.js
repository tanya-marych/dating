import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import Header from './parts/Header';
import Footer from './parts/Footer';

export default class MainLayout extends Component {
    renderContent = () => {
        const { children } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1 }}>
                    {children}
                </View>
                <Footer />
            </View>
        );
    }

    renderScrollContent() {
        const { children } = this.props;

        return (
            <ScrollView>
                <Header />
                <View style={{ flex: 1, backgroundColor: 'red' }}>
                    {children}
                </View>
                <Footer />
            </ScrollView>
        );
    }

    render() {
        const { scrollable } = this.props;

        return scrollable ? this.renderScrollContent() : this.renderContent();
    }
}

MainLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    scrollable: PropTypes.bool,
};

MainLayout.defaultProps = {
    children: [],
    scrollable: false,
};
