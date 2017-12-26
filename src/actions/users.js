import * as types from './actionTypes';

export const handleNewUser = (name) => {
    return (dispatch, getState, socket) => {
    
        socket.send(JSON.stringify(addUser(name)));

        dispatch(setUser(name));

        return Promise.resolve();
    };
};
export const handleUserDisconnect = (name) => {
    return (dispatch, getState, socket) => {

        socket.send(JSON.stringify(userDisconnected(name)));

        return Promise.resolve();
    };
};
export const addUser = name => ({
    type: types.ADD_USER,
    id: 0,
    name
});
export const setUser = name => ({
    type: types.SET_USER,
    name
});
export const userDisconnected = name => ({
    type: types.USER_DISCONNECTED,
    name
});
export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});