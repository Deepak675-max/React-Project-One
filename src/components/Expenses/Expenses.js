// Write your code here
// Write your code at relevant places in the code below

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";


function App(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        price={expense.price}
                    />
                );
            })}
        </Card>
    );
}

export default App;
