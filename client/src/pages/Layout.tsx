import { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export const Layout: FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 pg-20 font-robot text-white">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}
