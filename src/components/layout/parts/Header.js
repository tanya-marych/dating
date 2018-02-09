import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import icons from '../../../assets/icons';
import Styles from './HeaderStyles';

class Header extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.side}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('DrawerOpen'); }}>
                        <Image source={icons.burger} style={Styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={Styles.text}>Hello</Text>
                </View>
                <View style={Styles.side}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Messages'); }}>
                        <Image source={icons.messages} style={Styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Header.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default withNavigation(Header);
