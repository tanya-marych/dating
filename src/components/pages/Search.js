import React, { Component } from 'react';
import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import MainLayout from '../layout/MainLayout';
import User from '../../containers/pages/search/UserContainer';
import Pager from '../../containers/PagerContainer';

import icons from '../../assets/icons';

import Styles from './SearchStyles';

import { fetchUsers } from '../../api';

const USERS_PER_PAGE = 10;

export default class Search extends Component {
    static navigationOptions = () => {
        const title = 'поиск';

        return {
            drawerLabel: title.toUpperCase(),
            drawerIcon: () => (
                <Image
                    source={icons.search}
                    style={Styles.icon}
                />
            ),
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: this.props.users,
        };
    }

    async componentWillMount() {
        const { users, initUsers, setPagesAmount } = this.props;

        if (users.length > 0) {
            this.setState({ isLoading: false });
        } else {
            const data = await fetchUsers();
            const pagerSize = Math.ceil(data.length / USERS_PER_PAGE);

            setTimeout(() => {
                initUsers(data);
                setPagesAmount(pagerSize);
            }, 2000);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { users } = this.state;

        if (users !== nextProps.users) {
            this.setState({ data: nextProps.users, isLoading: false });
        }
    }

    keyExtractor = item => item.id;

    renderItem = ({ item }) => <User user={item} />;

    renderFooter = () => (
        <View style={Styles.pagerContainer}>
            <Pager />
        </View>
    );

    render() {
        const { isLoading, data } = this.state;

        return (
            <MainLayout scrollable={!isLoading}>
                <View style={Styles.container}>
                    {isLoading
                        ? <ActivityIndicator style={Styles.spinner} />
                        : (
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={data}
                                numColumns={2}
                                renderItem={this.renderItem}
                                contentContainerStyle={Styles.flat}
                                ListFooterComponent={this.renderFooter}
                            />
                        )
                    }
                </View>
            </MainLayout>
        );
    }
}

Search.propTypes = {
    users: PropTypes.array.isRequired,
};
