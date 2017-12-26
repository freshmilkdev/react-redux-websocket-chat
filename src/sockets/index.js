import * as types from '../actions/actionTypes';
import {addUser, handleNewUser, populateUsersList, handleUserDisconnect} from '../actions/users';
import {messageReceived} from '../actions/messages';

export default class {
    constructor(url, userName) {
        this.socket = new WebSocket(url);
        this.userName = userName;

        this.setEventListeners = this.setEventListeners.bind(this);
        this.getSocketInstance = this.getSocketInstance.bind(this);


    }

    getSocketInstance() {
        return this.socket;
    }

    setEventListeners(dispatch) {
        let {socket, userName} = this;

        socket.onopen = () => {
            dispatch(handleNewUser(userName));
        };

        //Listen responses from a socket located on server
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            switch (data.type) {
                case types.ADD_MESSAGE:
                    dispatch(messageReceived(data.text, data.author));
                    break;
                case types.USER_DISCONNECTED:
                    dispatch(messageReceived(`User ${data.name} has been disconnected.`, 'System'));
                    break;
                case types.ADD_USER:
                    dispatch(addUser(data.name));
                    break;
                case types.USERS_LIST:
                    dispatch(populateUsersList(data.users));
                    break;
                default:
                    break
            }
        };

        window.onbeforeunload = () => {
            dispatch(handleUserDisconnect(userName));
            socket.close();
        };

    }
};
