import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import Touchable from '../../../common/Touchable';

import Styles from './UserButtonStyles';

export default class SeacrhUser extends Component {
    handlePress = () => {
        this.props.onPress();
    }

    render() {
        const { tint, icon } = this.props;

        return (
            <Touchable style={Styles.activity} onPress={this.handlePress}>
                <Image source={icon} style={Styles.icon} tintColor={tint} />
            </Touchable>
        );
    }
}

SeacrhUser.propTypes = {
    tint: PropTypes.string.isRequired,
    icon: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
};
