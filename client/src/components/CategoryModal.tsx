import { FC, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchCreateAndUpdateCategory } from '../store/reducers/ActionCreators'

interface ICategoryModal {
    type: 'post' | 'patch';
    id: number;
    setVisibleModal: (visible: boolean) => void;
}

const CategoryModal: FC<ICategoryModal> = ({ type, id, setVisibleModal }) => {
    const [title, setTitle] = useState<string>('')

    const dispatch = useAppDispatch()

    const createAndUpdateCategory = () => {
        dispatch(fetchCreateAndUpdateCategory(type, title, id))
        setVisibleModal(false)
    }

    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/50 flex justify-center items-center'>
            <div className='grid gap-4 w-[300px] rounded-md bg-slate-900 p-5'>
                <label htmlFor='title'>
                    <span>Category Title</span>
                    <input
                        className='input w-full cursor-default'
                        type="text"
                        name='title'
                        placeholder='Title...'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <div className='flex items-center gap-2'>
                    <button onClick={createAndUpdateCategory} className='btn btn-green' type='submit'>
                        {type === 'patch' ? 'Save' : 'Create'}
                    </button>
                    <button onClick={() => setVisibleModal(false)} className='btn btn-red'>Close</button>
                </div>
            </div>
        </div >
    )
}

export default CategoryModal