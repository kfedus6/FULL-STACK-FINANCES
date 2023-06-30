import { FC, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { TransactionState } from '../store/reducers/TransactionSlice'
import { fetchFindAllTransactions } from '../store/reducers/ActionCreators'
import { formaDate } from '../helpers/date.helper'
import { formatUSD } from '../helpers/currency.helper'

const TransactionTable: FC = () => {

    const dispatch = useAppDispatch()
    const { transactions }: TransactionState = useAppSelector(state => state.transaction)

    useEffect(() => {
        dispatch(fetchFindAllTransactions())
    }, [])

    return (
        <div className='bg-slate-800 px-4 py-3 mt-4 rounded-md'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='font-bold cursor-default'> № </td>
                        <td className='font-bold cursor-default'>Title</td>
                        <td className='font-bold cursor-default'>Amount($)</td>
                        <td className='font-bold cursor-default'>Category</td>
                        <td className='font-bold cursor-default'>Date</td>
                        <td className='text-right cursor-default'>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length ?
                        transactions.map((item: any, idx: any) => (
                            <tr key={idx}>
                                <td className='cursor-default'>{idx + 1}</td>
                                <td className='cursor-default'>{item.title}</td>
                                <td className={item.type === 'income'
                                    ? 'text-green-500 cursor-default'
                                    : 'text-red-500 cursor-default'}
                                >
                                    {item.type === 'income'
                                        ? `+ ${formatUSD.format(item.amount)}`
                                        : `- ${formatUSD.format(item.amount)}`}
                                </td>
                                <td className='cursor-default'>
                                    {item.category?.title || 'Other'}
                                </td>
                                <td className='cursor-default'>{formaDate(item.createdAt)}</td>
                                <td>
                                    <button className='btn hover:btn-red ml-auto'>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                        :
                        <></>}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable