import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Form, FormField, Message, MessageHeader } from "semantic-ui-react"

interface FormFields {
    email: string,
    password: string
}

export const LoginForm = () => {

    const [formFields, SetFormFields] = useState<FormFields>({
        email: "",
        password: ""

    })
    const [isSuccessLogin, setIsSuccessLogin] = useState<boolean>()
    const credentials: FormFields = {
        email: "gabriel@mail.com",
        password: "12345"
    }

    const handleSubmit = () => {
        if (formFields.email === credentials.email && formFields.password === credentials.password) {
            setIsSuccessLogin(true)
        } else {
            setIsSuccessLogin(false)
        }
    }


    return (
        <Container fluid style={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", height: "90%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Log in</h1>
                <Form onSubmit={handleSubmit} style={{ width: "100%", marginTop: "50px" }}>
                    <FormField>
                        <label>Email</label>
                        <input type="email" value={formFields.email} onChange={(e) => SetFormFields({ ...formFields, email: e.target.value })} placeholder='joe@email.com' />
                    </FormField>
                    <FormField>
                        <label>Password</label>
                        <input value={formFields.password} onChange={(e) => SetFormFields({ ...formFields, password: e.target.value })} type="password" placeholder='Enter your Password' />
                    </FormField>
                    <Link to={"/forgot-password"} style={{ float: "inline-end", color: "black", textDecoration: "none" }}>forgot password?</Link>

                    <div style={{ width: "100%" }}>

                        <Button type='submit' style={{ backgroundColor: "#7FFFD4", width: "100%", height: "50px", marginTop: "50px" }}>Login</Button>
                    </div>
                    <div style={{ marginTop: "10px", height: "80px" }}>

                        {
                            isSuccessLogin === undefined ?
                                <></>
                                : isSuccessLogin ?
                                    <Message positive>
                                        <MessageHeader>Successful login</MessageHeader>
                                        <p>
                                            You're logged!
                                        </p>
                                    </Message>
                                    :

                                    <Message negative>
                                        <MessageHeader>Invalid credentials</MessageHeader>
                                        <p>
                                            Verify your email and password and try again.
                                        </p>
                                    </Message>

                        }
                    </div>

                </Form>

            </div>

        </Container>
    )
}