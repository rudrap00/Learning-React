import React, { useState } from "react";
import './ExpenseForm.css'
import uuid4 from "uuid4";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);

    // setInput({
    //     ...input,
    //     date: event.target.value
    // })
    // setInput((state) => {
    //     return{ ...state, date: event.target.value }
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      id: uuid4(),
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title} required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountHandler}
            value={amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateHandler} value={date} required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelForm} type="button" >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
