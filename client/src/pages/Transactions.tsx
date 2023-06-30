import { FC } from "react"
import TransactionForm from "../components/TransactionForm"
import TransactionTable from "../components/TransactionTable"

const Transactions: FC = () => {
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
                            <p className="mt-2 rounded-sm bg-green-600 p-1 text-center">1000$</p>
                        </div>
                        <div className="cursor-default">
                            <p className="uppercase text-md text-center font-bold">Total Expense:</p>
                            <p className="mt-2 rounded-sm bg-red-500 p-1 text-center">1000$</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="my-5">
                <TransactionTable />
            </h1>
        </>
    )
}

export default Transactions