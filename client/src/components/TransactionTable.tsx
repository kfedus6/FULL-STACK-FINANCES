import { FC, useEffect, useMemo, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { TransactionState } from '../store/reducers/TransactionSlice'
import { fetchDeleteTransaction, fetchFindAllPaginationTransactions, fetchFindAllTransactions } from '../store/reducers/ActionCreators'
import { formaDate } from '../helpers/date.helper'
import { formatUSD } from '../helpers/currency.helper'
import ReactPaginate from 'react-paginate'

const TransactionTable: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(3)
    const [totalPages, setTotalPages] = useState<number>(0)

    const dispatch = useAppDispatch()
    const { transactions, transactionsPagination }: TransactionState = useAppSelector(state => state.transaction)

    useEffect(() => {
        dispatch(fetchFindAllTransactions())
        dispatch(fetchFindAllPaginationTransactions(page, limit))
    }, [page, transactionsPagination])

    useMemo(() => {
        setTotalPages(Math.ceil(transactions.length / limit))
    }, [transactions])

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(+selectedItem.selected + 1)
    }

    const sendTransactionId = (id: any) => {
        dispatch(fetchDeleteTransaction(id))
    }

    return (
        <>
            <ReactPaginate
                className='flex gap-3 justify-end mt-4 items-center'
                activeClassName='bg-blue-600 rounded-sm'
                pageLinkClassName='text-white text-xs py-1 px-2 rounded-sm'
                previousClassName='text-white py-1 px-2 bg-slate-800 rounded-sm text-xs'
                nextClassName='text-white py-1 px-2 bg-slate-800 rounded-sm text-xs'
                disabledClassName='text-white/50 cursor-not-allowed'
                disabledLinkClassName='text-slate-600 cursor-not-allowed'
                pageCount={+totalPages}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
            />
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
                            transactionsPagination.map((item: any, idx: any) => (
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
                                        <button onClick={() => sendTransactionId(item.id)} className='btn hover:btn-red ml-auto'>
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
        </>
    )
}

export default TransactionTable