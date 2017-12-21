import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState';
import thunk from 'redux-thunk';

const store = (socket) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(socket))
    );
};
export default store;