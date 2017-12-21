import * as types from '../actions/actionTypes'
import initialState from '../store/initialState';
const messages = (state = initialState.messages, action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    text: action.text,
                    author: action.author,
                    id: action.id
                }
            ]);
        default:
            return state;
    }
};

export default messages;