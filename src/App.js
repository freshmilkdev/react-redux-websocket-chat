import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/users/UsersContainer';
import MessagesContainer from './components/messages/MessagesContainer';
class App extends Component {
    render() {
        return (
            <div id="container">
                <Sidebar />
                <MessagesContainer/>
            </div>
        );
    }
}

export default App;
