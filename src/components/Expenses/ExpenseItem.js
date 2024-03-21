// Write yoour code at relevant places in the code below:

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  function clickHandler(event) {
    console.log("Expense Deleted!!!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
