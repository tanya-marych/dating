import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Styles from './DrawerStyles';

export default class DrawerHeader extends Component {
    render() {
        const { user } = this.props;

        const username = `${user.name}, ${user.age}`;
        const location = `${user.city}, ${user.country}`;

        return (
            <View style={Styles.container}>
                <Image source={{ uri: user.photo }} style={Styles.avatar} />
                <View style={Styles.infoContainer}>
                    <Text style={Styles.username}>{username}</Text>
                    <Text style={Styles.location}>{location}</Text>
                </View>
            </View>
        );
    }
}

DrawerHeader.propTypes = {
    user: PropTypes.object.isRequired,
};
