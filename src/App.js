import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';

function App() {
  const expenses = [
    {id: 'e1', title: 'Insurance', amount: '2500', date: new Date(2022, 7, 21)},
    {id: 'e2', title: 'Apparels', amount: '3500', date: new Date(2022, 10, 21)},
    {id: 'e3', title: 'TV', amount: '5000', date: new Date(2022, 9, 11)},
    {id: 'e4', title: 'Relocation', amount: '7550', date: new Date(2023, 4, 3)}
  ]

  const [items, setItems] = useState(expenses)

  const addExpenseHandler = (expenseData) =>{
    setItems((prev) => [expenseData, ...prev])
  }


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {items} />
    </div>
  );
}

export default App;
