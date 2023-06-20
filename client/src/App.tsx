import { BrowserRouter } from "react-router-dom"
import { useAppDispatch } from "./hooks/redux"
import { fetchProfile } from "./store/reducers/ActionCreators"
import { useEffect } from "react"
import AppRouter from "./components/AppRouter"

const App = () => {
    const dispatch = useAppDispatch()

    const checkAuth = () => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(fetchProfile())
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App