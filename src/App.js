import React from 'react';

import UserList from './UserList';
import UserData from './UserData';
import './css/App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    firstName: 'Ebran',
                    lastName: 'Khan'
                }, 
                {
                    id: 2,
                    firstName: 'Example',
                    lastName: 'Exam'
                },
                {
                    id: 3,
                    firstName: 'Number',
                    lastName: 'Roll'
                },
                {
                    id: 4,
                    firstName: 'Switch',
                    lastName: 'Case'
                },
            ]
        };
    }

    updateName(firstName, lastName) {
    }

    render() {
        return (
            <div className="app">
                <UserList list={this.state.list} />
                <UserData />
            </div>
        );
    }
}

export default App;