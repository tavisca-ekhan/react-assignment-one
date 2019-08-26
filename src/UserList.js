import React from 'react';

import './css/UserList.css';

class UserList extends React.Component {
    render() {
        const lists = this.props.list.map((obj) => {
            return (
                <li key={obj.id}>
                    {obj.firstName} {obj.lastName}
                </li> 
            );
        }) 

        return (
            <div className="user-list">
                <ul>{lists}</ul>
            </div>
        );
    }
}

export default UserList;