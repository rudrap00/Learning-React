import Chart from "../Chart/Chart";


function ExpensesChart(props) {
    let max = 0;
    const chartDataPoints = [
        {label: 'Jan', value: 0, maxValue: 0},
        {label: 'Feb', value: 0, maxValue: 0},
        {label: 'Mar', value: 0, maxValue: 0},
        {label: 'Apr', value: 0, maxValue: 0},
        {label: 'May', value: 0, maxValue: 0},
        {label: 'Jun', value: 0, maxValue: 0},
        {label: 'Jul', value: 0, maxValue: 0},
        {label: 'Aug', value: 0, maxValue: 0},
        {label: 'Sep', value: 0, maxValue: 0},
        {label: 'Oct', value: 0, maxValue: 0},
        {label: 'Nov', value: 0, maxValue: 0},
        {label: 'Dec', value: 0, maxValue: 0}
    ]

    for(const expense of props.expenses){
        const month = expense.date.getMonth();
        chartDataPoints[month].value = expense.amount;
        max = Math.max(max, expense.amount);
    }

    for(let i = 0; i < 12; i++){
        chartDataPoints[i].maxValue = max;
    }

    return <Chart dataPoints = {chartDataPoints} />
}

export default ExpensesChart;