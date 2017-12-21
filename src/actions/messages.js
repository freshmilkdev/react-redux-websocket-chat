import * as types from './actionTypes';

export const addMessage = (text, author) => {
    return (dispatch) => {
        dispatch(addMessageSuccess(text, author));
    };
};
export const addMessageSuccess = (text, author) => ({
    type: types.ADD_MESSAGE,
    id: '',
    text,
    author
});

export const messageReceived = (text, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: '',
    text,
    author
});