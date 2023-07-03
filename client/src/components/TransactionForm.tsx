import { FC, useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { CategoryState } from '../store/reducers/CategorySlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchCreateTransaction, fetchFindAllCategories } from '../store/reducers/ActionCreators'
import CategoryModal from './CategoryModal'

const TransactionForm: FC = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [amount, setAmount] = useState<any>('')
    const [type, setType] = useState<string>('')
    const [category, setCategory] = useState<any>(0)

    const dispatch = useAppDispatch()
    const { categories }: CategoryState = useAppSelector(state => state.category)

    useEffect(() => {
        dispatch(fetchFindAllCategories())
    }, [categories])

    const sendTransactionData = () => {
        const data: any = { title: title, amount: +amount, type: type, category: +category }
        dispatch(fetchCreateTransaction(data))
    }

    return (
        <div className='rounded-md bg-slate-800 p-4'>
            <div className='grid gap-2'>
                <label className='grid' htmlFor="title">
                    <span>Title</span>
                    <input
                        type="text"
                        className='input border-slate-700 cursor-default'
                        placeholder='Title...'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label className='grid' htmlFor="amount">
                    <span>Amount</span>
                    <input
                        type="text"
                        className='input border-slate-700 cursor-default'
                        placeholder='Amount...'
                        name='amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                {categories.length ? (
                    <label htmlFor="category" className='grid'>
                        <span>Category</span>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className='input border-slate-700 cursor-pointer'
                            name="category"
                            defaultValue="category"
                            required>
                            <option className='bg-slate-700' value="category" selected disabled>Category</option>
                            {categories.map((item: any, idx: any) => (
                                <option className='bg-slate-700' key={idx} value={item.id}>{item.title}</option>
                            ))}
                        </select>
                    </label>
                ) : (
                    <h1 className='mt-1 text-red-300 cursor-default'>
                        To continue create a category first
                    </h1>
                )}
                <button onClick={() => setVisibleModal(true)} className='mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'>
                    <FaPlus />
                    <span>Manage categories</span>
                </button>
                <div className="flex gap-4 items-center">
                    <label className='flex cursor-pointer items-center gap-2'>
                        <input
                            onChange={(e) => setType(e.target.value)}
                            type="radio"
                            name="type"
                            value={'income'}
                            className='form-radio text-blue-600'
                        />
                        <span>Income</span>
                    </label>
                    <label className='flex cursor-pointer items-center gap-2'>
                        <input
                            onChange={(e) => setType(e.target.value)}
                            type="radio"
                            name="type"
                            value={'expense'}
                            className='form-radio text-blue-600'
                        />
                        <span>Expense</span>
                    </label>
                </div>
                <button onClick={sendTransactionData} className='btn btn-green max-w-fit mt-2'>Submit</button>
            </div>
            {visibleModal && (<CategoryModal type='post' id={0} setVisibleModal={setVisibleModal} />)}
        </div>
    )
}

export default TransactionForm