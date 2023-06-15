import { FC } from 'react'
import { UserState } from '../store/reducers/UserSlice'
import { useAppSelector } from '../hooks/redux'
import img from '../assets/protected.png'

interface Props {
    children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
    const { isAuth }: UserState = useAppSelector(state => state.user)

    return (
        <>
            {isAuth
                ?
                children
                :
                <div className='flex flex-col justyfi-center items-center mt-20 gap-10'>
                    <h1 className='text-2xl'>To view this page you must be logged in!</h1>
                    <img className='w-1/3' src={img} alt="img" />
                </div>
            }
        </>
    )
}

export default ProtectedRoute