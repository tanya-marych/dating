import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Styles from './InfoStyles';

const Info = ({ info, half }) => {
    const { title, list } = info;

    return (
        <View style={[half && Styles.half, Styles.info]}>
            <Text style={Styles.infoTitle}>{title}</Text>
            <View>
                {list.map(item => (
                    <Text
                        style={Styles.infoText}
                        key={item}
                    >
                        {item}
                    </Text>
                ))}
            </View>
        </View>
    );
};

Info.propTypes = {
    info: PropTypes.object.isRequired,
    half: PropTypes.bool,
};

Info.defaultProps = {
    half: false,
};

export default Info;
