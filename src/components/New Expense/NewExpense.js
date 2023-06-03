import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
    const saveExpenseDataHandler = (expenseData) => {
        props.onAddExpense(expenseData)
        setState(<button onClick={() => {setState(form)}}>Add New Expense</button>)
    }

    const cancelFormHandler = () => {
        setState(<button onClick={() => {setState(form)}}>Add New Expense</button>)
    }

    const form = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancelForm = {cancelFormHandler} />
    const [state, setState] = useState(<button onClick={() => {setState(form)}}>Add New Expense</button>)


    return(
        <div className="new-expense">
            {state}
        </div>
    )
}

export default NewExpense;