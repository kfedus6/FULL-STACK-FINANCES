import { FC } from 'react'
import { Link } from 'react-router-dom'
import error from '../assets/error.png'

const ErrorPage: FC = () => {
    return (
        <div className='min-h-screen bg-slate-900 fotn-robot text-white felx justify-center items-center flex-col gap-10'>
            <img src={error} alt="error" />
            <Link to={'/'} className='bg-sky-500 rounded-md px6 py-2'>Back</Link>
        </div>
    )
}

export default ErrorPage