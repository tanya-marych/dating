import { connect } from 'react-redux';

import * as UsersActions from '../../actions/UsersActions';
import * as PagerActions from '../../actions/PagerActions';

import SearchPage from '../../components/pages/Search';

const USERS_PER_PAGE = 10;

function mapStateToProps(state) {
    const page = state.pager.page || 1;
    const users = state.users.users.slice(USERS_PER_PAGE * (page - 1), USERS_PER_PAGE * page) || [];

    return {
        users,
    };
}

export default connect(mapStateToProps, { ...UsersActions, ...PagerActions })(SearchPage);
