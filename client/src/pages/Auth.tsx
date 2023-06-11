import { FC, useEffect, useState } from "react"
import { IUser } from "../types/types"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchLogin, fetchRegistration } from "../store/reducers/ActionCreators"
import { useNavigate } from "react-router-dom"

const Auth: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const { isAuth }: any = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const registrationOrLogin = () => {
        const userData: IUser = { email, password }
        if (isLogin) {
            dispatch(fetchLogin(userData))
        } else {
            dispatch(fetchRegistration(userData))
        }
    }

    return (
        <div className="mt-40 felx flex-col justify-center bg-slate-900 text-white">
            <h1 className="text-center text-xl mb-10 cursor-default">
                {isLogin ? 'Login' : 'Registration'}
            </h1>
            <form className="flex w-1/3 flex-col mx-auto gap-5" onClick={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    placeholder="Pssword"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btn-green mx-auto" onClick={registrationOrLogin}>Submit</button>
            </form>
            <div className="flex justify-center mt-5">
                <button className="text-white-300 btn-custom" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin
                        ?
                        `You don't have an account?`
                        :
                        `Already have an account?`
                    }
                </button>
            </div>
        </div>
    )
}

export default Auth