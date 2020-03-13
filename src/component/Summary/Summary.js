import React from 'react';
import './Summary.css';

const Summary = (props) => {
    console.log(props);

    const summary = props.summary;
    const totalSalary = summary.reduce((total, curnt) => total + parseFloat(curnt.salary), 0)
    const name = summary.map((name) => name.name)

    const formatNumber = (num) => {
        let precision = parseFloat(num).toFixed(2);
        return precision;
    }
    return (
        <div className="summary-paid">
            <div className="paid-members">
                <h3>Paid Members List:</h3>
                <ul>
                    {
                        summary.map((name) => <li><img src={name.img} alt="" /> <b>{name.name}</b></li>)
                    }
                </ul>
            </div>
            <div className="summary-class">
                <h3>Fund Summary</h3>
                <p>Paid Members: {summary.length} </p>
                <p>Total Fund: ${formatNumber(totalSalary)}</p>
            </div>
        </div>
    );
};

export default Summary;