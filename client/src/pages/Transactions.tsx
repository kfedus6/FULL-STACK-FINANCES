import { FC, useEffect } from "react"
import TransactionForm from "../components/TransactionForm"
import TransactionTable from "../components/TransactionTable"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchIncomeAndExpenseTransactions } from "../store/reducers/ActionCreators"
import { TransactionState } from "../store/reducers/TransactionSlice"
import { formatUSD } from "../helpers/currency.helper"
import Chart from "../components/Chart"

const Transactions: FC = () => {

    const dispatch = useAppDispatch()
    const { totalIncome, totalExpense }: TransactionState = useAppSelector(state => state.transaction)

    useEffect(() => {
        dispatch(fetchIncomeAndExpenseTransactions())
    }, [])
    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-4 items-start">
                <div className="grid col-span-2">
                    <TransactionForm />
                </div>
                <div className="rounded-md bg-slate-800 p-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="cursor-default">
                            <p className="uppercase text-md text-center font-bold">Total Income:</p>
                            <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">{formatUSD.format(totalIncome)}</p>
                        </div>
                        <div className="cursor-default">
                            <p className="uppercase text-md text-center font-bold">Total Expense:</p>
                            <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">{formatUSD.format(totalExpense)}</p>
                        </div>
                    </div>
                    <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
                </div>
            </div>
            <h1 className="my-5">
                <TransactionTable />
            </h1>
        </>
    )
}

export default Transactions