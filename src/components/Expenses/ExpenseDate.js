// Write your code here
// Write your code at relevant places in the code below

import "./ExpenseDate.css";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function ExpenseItem(props) {
    const month = monthNames[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__date">{date}</div>
        </div>
    );
}

export default ExpenseItem;
