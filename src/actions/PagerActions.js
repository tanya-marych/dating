export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_PAGES_AMOUNT = 'SET_PAGES_AMOUNT';

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page,
    };
}

export function setPagesAmount(pages) {
    return {
        type: SET_PAGES_AMOUNT,
        pages,
    };
}
