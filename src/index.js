import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
//import ErrorBoundary from './helpers/ErrorBoundary';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Socket from './sockets';
import configStore from './store';

import userName from './utils/name';

let socket = new Socket('ws://localhost:1337', userName);

const store = configStore(socket.getSocketInstance(), userName);

socket.setEventListeners(store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
