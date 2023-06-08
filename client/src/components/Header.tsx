import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { useAppSelector } from '../hooks/redux'
import { UserState } from '../store/reducers/UserSlice'

const Header: FC = () => {
    const { isAuth }: UserState = useAppSelector(state => state.user)

    return (
        <header className='flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm'>
            <Link to='/'>
                <span>
                    <FaBtc size={30} />
                </span>
            </Link>
            {!isAuth
                ?
                <nav className='ml-auto mr-10'>
                    <ul className='flex items-center gap-5'>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/transactions'}>Transactions</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/categories'}>Categories</NavLink>
                        </li>
                        <button className='btn btn-red'>
                            <span>Log Out</span>
                            <FaSignOutAlt />
                        </button>
                    </ul>
                </nav>
                :
                <nav className='ml-auto'>
                    <ul>
                        <li>
                            <NavLink to={'/auth'}>Log in / Sing in</NavLink>
                        </li>
                    </ul>
                </nav>
            }
        </header >
    )
}

export default Header