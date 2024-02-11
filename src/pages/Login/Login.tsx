import { Link } from "react-router-dom"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export const LoginPage = () => {
    return (
        <div style={{
            height: '80vh', width: '90%',
            boxShadow: "10px 2px 10px 10px rgba(0, 0, 0, 0.2)"
        }}>
            <div style={{ display: "flex", flexDirection: "row-reverse", marginRight: "24px" }}>
                <Link to="/need-help" style={{ color: "black", textDecoration: "none" }}>Need Help?</Link>

            </div>
            <LoginForm />
        </div >
    )
}