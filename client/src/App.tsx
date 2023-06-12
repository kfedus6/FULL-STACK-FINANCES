import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { useAppDispatch } from "./hooks/redux"
import { fetchProfile } from "./store/reducers/ActionCreators"
import { useEffect } from "react"

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

    return <RouterProvider router={router} />
}

export default App