import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ActivityIndicator } from 'react-native';

import icons from '../../../../assets/icons';
import Styles from './AvatarStyles';

export default class SeacrhUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    handleLoadImage = () => {
        this.setState({ isLoading: false });
    }

    render() {
        const { isLoading } = this.state;
        const { photo, photoCount, isFavorite } = this.props.user;

        return (
            <View style={Styles.avatarContainer}>
                <Image
                    onLoad={this.handleLoadImage}
                    source={{ uri: photo }}
                    style={Styles.avatar}
                />

                {isLoading && <ActivityIndicator style={Styles.spinner} />}
                {photoCount && (
                    <View style={Styles.counterContainer}>
                        <Image
                            source={icons.photo}
                            style={Styles.photos}
                            tintColor='white'
                        />
                        <Text style={Styles.counter}>{photoCount}</Text>
                    </View>
                )}
                {isFavorite && (
                    <View style={Styles.topContainer}>
                        <Text style={Styles.top}>ТОП</Text>
                    </View>
                )}
            </View>
        );
    }
}

SeacrhUser.propTypes = {
    user: PropTypes.object.isRequired,
};
