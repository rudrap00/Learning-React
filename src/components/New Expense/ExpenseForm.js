import React, { useRef } from "react";
import "./ExpenseForm.css";
import uuid4 from "uuid4";

function ExpenseForm(props) {
  const titleRef = useRef("");
  const amountRef = useRef(0);
  const dateRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const amount = amountRef.current.value;
    const date = dateRef.current.value;

    const expenseData = {
      id: uuid4(),
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };

    titleRef.current.value = "";
    amountRef.current.value = 0;
    dateRef.current.value = "";

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" ref={titleRef} required />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" ref={amountRef} required />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" ref={dateRef} required />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelForm} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
