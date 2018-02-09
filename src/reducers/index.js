import { combineReducers } from 'redux';

import users from './users';
import pager from './pager';

const rootReducer = combineReducers({
    users,
    pager,
});

export default rootReducer;
