import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/users';
import UserList from './UserList';
class UsersContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <UserList users={this.props.users}/>
        );
    }
}

UsersContainer.propTypes = {
    users: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);