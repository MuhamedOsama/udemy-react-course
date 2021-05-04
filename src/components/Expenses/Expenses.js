import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
function Expenses(props) {
  const [expenses, setExpenses] = useState(props.expenses);
  const yearChangeHandler = (year) => {
    setExpenses(props.expenses.filter((el) => el.date.getFullYear() == year));
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter onYearChange={yearChangeHandler} />
        {expenses.map((expense, index) => (
          <ExpenseItem expense={expense} key={index}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
