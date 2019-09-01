import React, {Component} from 'react';
import './Content.css';
import List from "../List/List";
import Select from "../Select/Select";

class Content extends Component {

    state = {
        users: [
            {id: 1, name: 'Sam', age: 33},
            {id: 2, name: 'Pete', age: 22},
            {id: 3, name: 'David', age: 44},
            {id: 4, name: 'Ashley', age: 22},
            {id: 5, name: 'Nancy', age: 33},
            {id: 6, name: 'Vivien', age: 44}
        ],
        filteredAge: ''
    };

    onSelectUser = (event) => {
        this.setState({filteredAge: event.target.value});
    };

    filterUsersByAge = () => {
        const {filteredAge, users} = this.state;

        return filteredAge ? users.filter(user => user.age === Number(filteredAge)) : null;
    };

    filterByAlphabet = (users) => {
        if (users) {
            return users.sort((a, b) => (a.name < b.name) ? -1 : 1);
        } else {
            return null;
        }
    };

    render () {
        return (
            <div className="content-wrap d-flex justify-content-between align-items-start">
                <Select users={this.state.users} onSelectUser={this.onSelectUser}/>
                <List users={this.filterByAlphabet(this.filterUsersByAge())}/>
            </div>
        );
    }
}

export default Content;