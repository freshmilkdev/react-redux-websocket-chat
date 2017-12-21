import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const store = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};
export default store;