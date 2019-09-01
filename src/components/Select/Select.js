import React from 'react';
import './Select.css';

const Select = ({users, onSelectUser}) => {
    const options = users.map(user => {
        return <option key={user.id} value={user.age}>{user.name} - age is {user.age}</option>
    });

    const classes = 'form-control form-control-lg';

    return <select className={classes} onChange={onSelectUser}>{options}</select>
};

export default Select;