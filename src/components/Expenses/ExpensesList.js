import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback' >Found no expenses</h2>
    }

    return (
        <ul className='expenses-list' >{
                props.items.map((ele) => {
                    return <ExpenseItem key = {ele.id} title={ele.title} amount={ele.amount} date = {ele.date} />
                })
        }
        </ul>
    )
}

export default ExpensesList;