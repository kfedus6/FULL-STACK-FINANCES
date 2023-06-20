import { FC, useState, useEffect } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import CategoryModal from '../components/CategoryModal'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { CategoryState } from '../store/reducers/CategorySlice'
import { fetchFindAllCategories, deleteCategoryId } from '../store/reducers/ActionCreators'

const Categories: FC = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [categoryId, setCategoryId] = useState<number>(0)

    const dispatch = useAppDispatch()
    const { categories }: CategoryState = useAppSelector(state => state.category)

    useEffect(() => {
        dispatch(fetchFindAllCategories())
    }, [categories])

    const deleteCategory = (id: number) => {
        dispatch(deleteCategoryId(id))
    }

    return (
        <>
            <div className='mt-10 p-4 rounded-md bg-slate-800'>
                <h1>Your category list:</h1>
                <div className='mt-2 flex flex-wrap items-center gap-2'>
                    {categories.length ? categories.map((item: any, idx: any) => (
                        <div key={idx} className='group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2'>
                            {item.title}
                            <div className='absolute hidden px-3 left-0 top-0 bottom-0 right-0 rounded-lg bg-black items-center justify-between group-hover:flex'>
                                <button
                                    onClick={() => {
                                        setCategoryId(item.id),
                                            setVisibleModal(true)
                                        setIsEdit(true)
                                    }}>
                                    <AiFillEdit size={16} />
                                </button>
                                <div className='flex cursor-pointer'>
                                    <input type="hidden" value={item.id} />
                                    <button type='submit'><AiFillCloseCircle size={16} onClick={() => deleteCategory(item.id)} /></button>
                                </div>
                            </div>
                        </div>
                    )) : <></>}
                </div>
                <button onClick={() => {
                    setVisibleModal(true),
                        setIsEdit(false)
                }} className='mt-5 max-w-fit flex items-center gap-2 text-white/50 hover:text-white'>
                    <FaPlus />
                    <span>Create a new category</span>
                </button>
            </div>
            {visibleModal && (<CategoryModal type='post' id={categoryId} setVisibleModal={setVisibleModal} />)}
            {visibleModal && isEdit && (<CategoryModal type='patch' id={categoryId} setVisibleModal={setVisibleModal} />)}
        </>
    )
}

export default Categories