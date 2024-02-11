import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login/Login";
import { NeedHelpPage } from "../pages/NeedHelp/NeedHelp";
import { ForgoPasswordPage } from "../pages/ForgotPassword/ForgotPassword";
import { RootPage } from "../pages/Root/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                path: "/",
                element: <LoginPage />,
            },
            {
                path: "/need-help",
                element: <NeedHelpPage />,
            },
            {
                path: "/forgot-password",
                element: <ForgoPasswordPage />,
            }
        ]
    },
])