export const INIT_USERS = 'INIT_USERS';

export const CHANGE_FAVOURITE = 'CHANGE_FAVOURITE';
export const CHANGE_WINK = 'CHANGE_WINK';

export function initUsers(users) {
    return {
        type: INIT_USERS,
        users,
    };
}

export function changeFavourite(userId) {
    return {
        type: CHANGE_FAVOURITE,
        userId,
    };
}

export function changeWink(userId) {
    return {
        type: CHANGE_WINK,
        userId,
    };
}
