import React from 'react';
import PropTypes from 'prop-types';
import MessageType from '../../types/message';
import Message from './Message';
const MessagesList = ({messages}) => {

    return (<section id="messages-list">
        <h3>Messages list</h3>
        <div>
            {messages.map((message, index)=>{
                return (<Message key={index} message={message}/>);
            })}
        </div>
    </section>);
};

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape(MessageType).isRequired
    ).isRequired
};

export default MessagesList;