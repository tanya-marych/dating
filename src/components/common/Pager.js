import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Touchable from '../common/Touchable';
import PageNumber from './pager/PageNumber';

import icons from '../../assets/icons';
import Styles from './PagerStyles';

const PER_PAGES = 6;

export default class Pager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSize: 0,
            from: 1,
        };
    }

    componentDidMount() {
        this.setRange(this.props);
    }


    componentWillReceiveProps(nextProps) {
        this.setRange(nextProps);
    }

    setRange = (props) => {
        const { active, size } = props;
        const currentBlock = Math.trunc((active - 1) / PER_PAGES);

        const from = PER_PAGES * currentBlock + 1 || 1;
        const last = PER_PAGES * currentBlock + PER_PAGES;
        const to = last > size ? size : last;

        this.setState({
            from,
            currentSize: to - from + 1,
        });
    }

    handlePrev = () => {
        const prev = this.state.from - PER_PAGES;

        if (prev > 0) {
            this.props.changePage(prev);
        }
    }

    handleNext = () => {
        const next = this.state.from + PER_PAGES;

        if (next < this.props.size) {
            this.props.changePage(next);
        }
    }

    generatePagesButtons = () => {
        const { active, changePage } = this.props;
        const { from, currentSize } = this.state;

        const pages = [];

        [...Array(currentSize).fill()].reduce((prev) => {
            const page = (
                <PageNumber
                    active={active === prev}
                    number={prev}
                    key={prev}//eslint-disable-line
                    changePage={changePage}
                />
            );
            pages.push(page);
            return prev + 1;
        }, from);

        return pages;
    }

    render() {
        return (
            <View style={Styles.container}>
                <Touchable style={Styles.arrow} onPress={this.handlePrev}>
                    <Image source={icons.arrowLeft} style={Styles.arrowImg} />
                </Touchable>

                <View style={Styles.pageContainer}>
                    {this.generatePagesButtons()}
                </View>

                <Touchable style={Styles.arrow} onPress={this.handleNext}>
                    <Image source={icons.arrowRight} style={Styles.arrowImg} />
                </Touchable>
            </View>
        );
    }
}

Pager.propTypes = {
    size: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
};
