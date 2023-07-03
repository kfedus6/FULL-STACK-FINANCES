import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../store/reducers/UserSlice'
import { useAppSelector } from '../hooks/redux'

const Home: FC = () => {
    const navigate = useNavigate()
    const { user, isAuth }: UserState = useAppSelector(state => state.user)

    return (
        <div className='flex justify-center items-center'>
            <div className='w-1/2 p-10 rounded-md border-2 border-slate-800 custom-margin'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    {isAuth
                        ?
                        <>
                            <h1 className='text-lg text-center'>Hello, <span className='text-sky-500'>{user.email}</span></h1>
                            <button onClick={() => navigate('/transactions')} className='btn btn-green'>Keep track of your money</button>
                        </>
                        :
                        <>
                            <h1 className='text-lg text-center'>To use the site, you need to log in</h1>
                            <button onClick={() => navigate('/auth')} className='btn btn-green'>Press to Join</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home