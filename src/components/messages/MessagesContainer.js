import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/messages';
import AddMessage from './AddMessage';
import MessagesList from './MessagesList';
import MessageType from '../../types/message';

class MessagesContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messageText: ''
        };

        this.changeMessage = this.changeMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    changeMessage(e) {
        this.setState({messageText: e.target.value});
    }

    addMessage(e) {
        this.props.actions.addMessage(e.target.value, this.props.author);
        this.setState({messageText: ''});
    }

    render() {
        return (
            <section id="main">
                <MessagesList messages={this.props.messages}/>
                <AddMessage
                    text={this.state.messageText}
                    userName={this.props.author}
                    changeMessage={this.changeMessage}
                    addMessage={this.addMessage}
                />
            </section>
        );
    }
}

MessagesContainer.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape(MessageType).isRequired
    ).isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        messages: state.messages,
        author: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);