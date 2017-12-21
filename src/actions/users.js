import * as types from './actionTypes';

export const addUser = (name) => {
    return (dispatch, getState, socket) => {
        dispatch(addUserSuccess(name));
        dispatch(setUserSuccess(name));
        return Promise.resolve();
    };
};
export const addUserSuccess = name => ({
    type: types.ADD_USER,
    id: '',
    name
});
export const setUserSuccess = name => ({
    type: types.SET_USER,
    name
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});