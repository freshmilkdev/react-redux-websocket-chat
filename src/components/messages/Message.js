import React from "react"
import PropTypes from "prop-types"
import MessageType from '../../types/message';
const Message = ({message}) => (
    <p>
        <i>{message.author}</i>: {message.text}
    </p>
);

Message.propTypes = {
    message: PropTypes.shape(MessageType).isRequired
};

export default Message