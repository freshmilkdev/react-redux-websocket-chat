import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configStore from './store/config';

const store = configStore();
//TODO: apply thunks stuff
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
