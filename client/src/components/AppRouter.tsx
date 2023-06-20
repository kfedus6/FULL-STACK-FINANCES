import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout"
import Home from "../pages/Home"
import Categories from "../pages/Categories"
import Transactions from "../pages/Transactions"
import Auth from "../pages/Auth"
import ErrorPage from "../pages/ErrorPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter