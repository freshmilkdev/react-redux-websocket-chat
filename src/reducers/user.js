import * as types from '../actions/actionTypes'
import initialState from '../store/initialState';

const user = (state = initialState.user, action) => {
    switch (action.type) {
        case types.SET_USER:
            return action.name;
        default:
            return state;
    }
};

export default user;