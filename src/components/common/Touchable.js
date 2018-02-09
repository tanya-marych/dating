import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export default class Touchable extends Component {
    render() {
        const { children, style, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={style}>
                {children}
            </TouchableOpacity>
        );
    }
}

Touchable.propTypes = {
    children: PropTypes.object.isRequired,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
    onPress: PropTypes.func,
};

Touchable.defaultProps = {
    onPress: () => null,
};

