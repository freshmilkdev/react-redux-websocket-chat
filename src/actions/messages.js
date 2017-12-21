import * as types from './actionTypes';

export const addMessage = (text, author) => {
    return (dispatch, getState, socket) => {
        socket.send(JSON.stringify({
            type: types.ADD_MESSAGE,
            text,
            author
        }));
        dispatch(messageReceived(text, author));
        return Promise.resolve();
    };
};

export const messageReceived = (text, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: '',
    text,
    author
});