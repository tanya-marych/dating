import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Avatar from './user/Avatar';
import ButtonsBlock from './user/ButtonsBlock';
import Styles from './UserStyles';

export default class SeacrhUser extends Component {
    toggleFavourite = () => {
        const { user, changeFavourite } = this.props;

        changeFavourite(user.id);
    }

    toggleWink = () => {
        const { user, changeWink } = this.props;

        changeWink(user.id);
    }

    renderButtonBlock = () => (
        <View style={Styles.activitiesContainer}>
            <ButtonsBlock
                user={this.props.user}
                changeWink={this.toggleWink}
                changeFavourite={this.toggleFavourite}
            />
        </View>
    );

    render() {
        const { name, age, city, country, isOnline } = this.props.user;
        const username = `${name}, ${age}`;
        const location = `${city}, ${country}`;

        return (
            <View style={Styles.container}>
                <Avatar user={this.props.user} />

                {this.renderButtonBlock()}

                <View style={Styles.infoContainer}>
                    <View style={Styles.usernameContainer}>
                        <Text style={Styles.username}>{username}</Text>
                        {isOnline && (
                            <View style={Styles.online} />
                        )}
                    </View>
                    <Text style={Styles.location}>{location}</Text>
                </View>
            </View>
        );
    }
}

SeacrhUser.propTypes = {
    user: PropTypes.object.isRequired,
    changeFavourite: PropTypes.func.isRequired,
    changeWink: PropTypes.func.isRequired,
};
