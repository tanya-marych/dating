import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Touchable from '../../common/Touchable';

import Styles from './PageNumberStyles';

export default class PageNumber extends Component {
    handlePress = () => {
        const { number, changePage } = this.props;

        changePage(number);
    }

    render() {
        const { number, active } = this.props;

        return (
            <Touchable
                onPress={this.handlePress}
                style={[Styles.container, active && Styles.active]}
            >
                <Text style={active ? Styles.activeText : Styles.text}>{number}</Text>
            </Touchable>
        );
    }
}

PageNumber.propTypes = {
    number: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    changePage: PropTypes.func.isRequired,
};
