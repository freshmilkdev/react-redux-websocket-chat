import * as types from '../actions/actionTypes';
import {addUser, handleNewUser, populateUsersList} from '../actions/users';
import {messageReceived} from '../actions/messages';

export default class {
    constructor(url, userName) {
        this.socket = new WebSocket(url);
        this.userName = userName;

        this.setEventListeners = this.setEventListeners.bind(this);
        this.getSocketInstance = this.getSocketInstance.bind(this);
        window.onbeforeunload = () => {
            this.socket.send(JSON.stringify({
                type: types.REMOVE_USER,
                name: this.userName
            }));
            this.socket.close();
        };
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

    }
};
