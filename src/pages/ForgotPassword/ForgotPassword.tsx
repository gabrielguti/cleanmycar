import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Form, FormField, Message, MessageHeader } from "semantic-ui-react"

export const ForgoPasswordPage = () => {
    const [email, setEmail] = useState("")
    const [isInstructionsSent, setIsInstructionsSent] = useState<boolean>()
    const handleSubmit = () => {
        if (email) {
            setIsInstructionsSent(true)
        } else setIsInstructionsSent(false)
    }

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
                    <h1>Forgot Password?</h1>
                    <p>We will send instructions to your registered email address</p>

                    <Form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "50px" }}>
                        <FormField>
                            <label>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='joe@email.com' />
                        </FormField>


                        <div style={{ width: "100%" }}>

                            <Button type='submit' style={{ backgroundColor: "#7FFFD4", width: "100%", height: "50px", marginTop: "50px" }}>Send</Button>
                        </div>
                        <div style={{ marginTop: "10px", height: "80px" }}>

                            {isInstructionsSent &&
                                <Message positive>
                                    <MessageHeader>Successful</MessageHeader>
                                    <p>
                                        Instructions were sent to the registered email
                                    </p>
                                </Message>


                            }


                        </div>

                    </Form>



                </div>

            </Container>

        </div >
    )

}