// Write yoour code at relevant places in the code below:

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react'

function ExpenseItem(props) {
  const [price, setPrice] = useState(props.price)
  function changePriceHandler(event) {
    event.preventDefault();
    setPrice(100);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={changePriceHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
