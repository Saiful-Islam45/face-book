import React from 'react';
import './FriendList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const FriendList = (props) => {
    const { name, email, salary, img } = props.user;
    return (
        <div className="every-friend">
            <div className="img-class">
                <img src={img} alt="" />
            </div>
            <div className="profile-class">

                <h3>{name}</h3>
                <p>{email}</p>
                <p><small>Salary: {salary}</small></p>
                <button onClick={() => props.addToSummary(props.user)} className="submit-btn"><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default FriendList;