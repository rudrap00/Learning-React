import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectYear) => {
    setYear((prev) => (prev = selectYear));
  };

  const filterItems = props.items.filter(
    (ele) => ele.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filterItems} />
      <ExpensesList items={filterItems} />
    </Card>
  );
}

export default Expenses;
