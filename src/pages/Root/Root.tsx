import { Outlet } from "react-router-dom"
import { Logo } from "../../components/Logo/Logo"

export const RootPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ backgroundColor: "#7FFFD4", height: "100vh", width: "30%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <div style={{ width: "80%" }}>
                    <Logo />
                </div>
            </div>
            <div style={{ height: "100vh", width: "70%", display: "flex", alignItems: "center" }}>
                <div style={{ width: '100%' }}>
                    <Outlet />
                </div>
            </div>


        </div >
    )
}