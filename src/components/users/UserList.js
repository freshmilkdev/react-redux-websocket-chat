import React from 'react';
import PropTypes from 'prop-types';
const UserList = ({users}) => {

    return (<aside id="sidebar">
        <h3>Users</h3>
        <ol>
            {
                users.map((user, index)=>{
                    return (<li key={index}>{user.name}</li>);
                })
            }
        </ol>
    </aside>);
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({name: PropTypes.string.isRequired}).isRequired
    ).isRequired
};

export default UserList;