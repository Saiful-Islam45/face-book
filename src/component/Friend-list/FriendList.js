import React, { useState } from 'react';
import './FriendList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faDonate } from '@fortawesome/free-solid-svg-icons'
const FriendList = (props) => {
    const { name, email, salary, img } = props.user;
    const [isPaid, setIsPaid] = useState(false);
    let paymentButton = <button onClick={() => { props.addToSummary(props.user); setIsPaid(true) }} className="pay-btn"><FontAwesomeIcon icon={faDonate} />  Add Fund</button>
        ;
    if (isPaid) {
        paymentButton = <button className="paid" disabled><FontAwesomeIcon icon={faCheckCircle} /> Paid</button>;
    }
    return (

        <div className="every-friend">
            <div className="img-class">
                <img src={img} alt="" />
            </div>
            <div className="profile-class">

                <h3>{name}</h3>
                <p><b>Email: </b>{email}</p>
                <p><b>Salary: </b>${salary}</p>


                {paymentButton}


            </div>
        </div>
    );
};

export default FriendList;