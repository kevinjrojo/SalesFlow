import { Outlet } from "react-router-dom"
import { Navbar } from "../pages/box/Navbar"
import { Header } from "../pages/box/Header"
import './DashboardLayout.css'

export function DashboardLayout({ children }) {
    return (
        <div className="dashboard__layout">
            <header className="header__layout">
                <Header />
            </header>
            <aside className="navbar__layout">
                <Navbar />
            </aside>
            <main className="main__layout">
                <Outlet />
                {children}
            </main>
        </div>
    )
} 