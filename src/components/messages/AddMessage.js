import React from 'react';
import PropTypes from 'prop-types'
const AddMessage = ({text, changeMessage, addMessage}) => {

    return (<input
        id="new-message"
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
                addMessage(e);
            }
        }}
        type="text"
        placeholder="New message"
        onChange={changeMessage}
        value={text}/>);
};

AddMessage.propTypes = {
    text: PropTypes.string.isRequired,
    changeMessage: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default AddMessage;