import { Link } from "react-router-dom"
import { Container } from "semantic-ui-react"

export const NeedHelpPage = () => {
    return (
        <div style={{
            height: '80vh', width: '90%',
            boxShadow: "10px 2px 10px 10px rgba(0, 0, 0, 0.2)"
        }}>
            <div style={{ marginLeft: "24px" }}>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>Login</Link>
            </div>

            <Container fluid style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", height: "90%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h1>Need help?</h1>
                    <p>
                        Forgot your password? Locked out of your account? We’ll help you resolve access issues.
                    </p>
                    <p>
                        Just send a email to <b>cleanmycar@test.com</b>
                    </p>


                </div>

            </Container>

        </div >
    )
}