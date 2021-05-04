import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
export default function ExpenseItem(props) {
  const [expense, setExpense] = useState(props.expense);
  const clickHandler = () =>
    setExpense({ amount: expense.amount++, ...expense });
  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price' onClick={clickHandler}>
          {expense.amount}
        </div>
      </div>
    </Card>
  );
}
