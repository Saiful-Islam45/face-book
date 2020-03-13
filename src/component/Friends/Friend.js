import React, { useState } from 'react';
import './Friend.css';
import Summary from '../Summary/Summary';
import FriendList from '../Friend-list/FriendList';
import employeeList from '../../fakeData/users.json';

const Friend = () => {
    const [users, setUsers] = useState(employeeList);
    const [summary, setSummary] = useState([]);
    const addToSummary = addData => {
        const addSummary = [...summary, addData];
        setSummary(addSummary);
    }
    return (
        <div className="body-container">
            <div className="friend-container">
                {
                    users.map(user => <FriendList addToSummary={addToSummary} user={user}></FriendList>)
                }
            </div>
            <div className="summary-container">
                <Summary summary={summary}></Summary>
            </div>
        </div>
    );
};

export default Friend;