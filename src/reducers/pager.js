import { CHANGE_PAGE, SET_PAGES_AMOUNT } from '../actions/PagerActions';

const initialState = {
    page: 1,
    pages: 1,
};

export default function connection(state = initialState, action) {
    switch (action.type) {
    case CHANGE_PAGE:
        return {
            ...state,
            page: action.page,
        };
    case SET_PAGES_AMOUNT:
        return {
            ...state,
            pages: action.pages,
        };
    default:
        return state;
    }
}
