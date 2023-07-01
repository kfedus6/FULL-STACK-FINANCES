import { FC } from 'react'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

interface PropsChart {
    totalIncome: number
    totalExpense: number
}

interface IData {
    value: number
    name: string
}

const COLORS = ['#00C49F', '#FF8042']

const Chart: FC<PropsChart> = ({ totalIncome, totalExpense }) => {

    const data = new Array<IData>(
        { value: totalIncome, name: 'Income' },
        { value: totalExpense, name: 'Expense' }
    )

    return (
        <PieChart width={270} height={267}>
            <Pie
                data={data}
                cy={'50%'}
                cx={'50%'}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend />
            <Tooltip />
        </PieChart>
    )
}

export default Chart