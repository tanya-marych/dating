import { INIT_USERS, CHANGE_FAVOURITE, CHANGE_WINK } from '../actions/UsersActions';

const initialState = {
    users: [],
};

export default function connection(state = initialState, action) {
    switch (action.type) {
    case INIT_USERS:
        return {
            ...state,
            users: action.users,
        };
    case CHANGE_FAVOURITE:
        return {
            ...state,
            users: state.users.map(user => (
                user.id === action.userId
                    ? {
                        ...user,
                        isFavourite: !user.isFavourite,
                    }
                    : user
            )),
        };
    case CHANGE_WINK:
        return {
            ...state,
            users: state.users.map(user => (user.id === action.userId
                ? {
                    ...user,
                    isWinked: !user.isWinked,
                }
                : user)),
        };
    default:
        return state;
    }
}
