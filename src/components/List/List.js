import React from 'react';
import './List.css';

const List = ({users}) => {
    let listItems;

    if (users) {
        listItems = users.map(user => {
            return <li key={user.id} className="list-group-item">{user.name} - age is {user.age}</li>
        })
    }

    return users ? <ul className="list-group">{listItems}</ul> :
                   <div className="alert alert-danger">List is empty. Select the user</div>;
};

export default List;