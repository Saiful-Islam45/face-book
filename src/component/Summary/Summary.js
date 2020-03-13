import React from 'react';
import './Summary.css';

const Summary = (props) => {
    const summary = props.summary;
    const totalSalary = summary.reduce((total, curnt) => total + parseFloat(curnt.salary), 0)
    const formatNumber = (num) => {
        let precision = parseFloat(num).toFixed(2);
        return precision;
    }
    return (
        <div>
            <h3>Fund Summary</h3>
            <p>Paid Members: {summary.length} </p>
            <p>Total Fund: {formatNumber(totalSalary)}</p>
        </div>
    );
};

export default Summary;