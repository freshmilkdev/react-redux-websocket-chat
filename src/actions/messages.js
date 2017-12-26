import * as types from './actionTypes';


export const addMessage = (text, author) => ({
    type: types.ADD_MESSAGE,
    id: 0,
    text,
    author
});
export const messageReceived = (text, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: 0,
    text,
    author
});

/* Thunks*/

export const handleNewMessage = (text, author) => {
    return (dispatch, getState, socket) => {
        socket.send(JSON.stringify(addMessage(text, author)));
        dispatch(messageReceived(text, author));
        return Promise.resolve();
    };
};