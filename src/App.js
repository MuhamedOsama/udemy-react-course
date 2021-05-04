import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const newExpenseHandler = (expense) => {
    console.log('new expense from app', expense);
    const newExpense = { id: `e${expenses.length + 1}`, ...expense };
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses);
  };
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'New Desk (Wooden)',
      amount: 621.31,
      date: new Date(2021, 3, 21),
    },
    {
      id: 'e3',
      title: 'Toiled Paper',
      amount: 111.44,
      date: new Date(2021, 4, 5),
    },
  ]);
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
