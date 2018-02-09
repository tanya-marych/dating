import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import UserButton from './UserButton';

import icons from '../../../../assets/icons';

import Styles from './ButtonsBlockStyles';

export default class ButtonsBlock extends Component {
    toggleFavourite = () => {
        const { user, changeFavourite } = this.props;

        changeFavourite(user.id);
    }

    toggleWink = () => {
        const { user, changeWink } = this.props;

        changeWink(user.id);
    }

    render = () => {
        const { isWinked, isFavourite } = this.props.user;

        return (
            <View style={Styles.activitiesContainer}>
                <UserButton
                    icon={icons.smile}
                    onPress={this.toggleWink}
                    tint={!!isWinked ? 'yellow' : 'white'}
                />

                <UserButton
                    icon={icons.favourite}
                    onPress={this.toggleFavourite}
                    tint={!!isFavourite ? 'yellow' : 'white'}
                />

                <UserButton
                    icon={icons.messages}
                    onPress={() => null}
                    tint='white'
                />
            </View>
        );
    }
}

ButtonsBlock.propTypes = {
    user: PropTypes.object.isRequired,
    changeFavourite: PropTypes.func.isRequired,
    changeWink: PropTypes.func.isRequired,
};
