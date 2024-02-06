import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/auth/Login/Login";
import Register from "../components/pages/auth/Register/Register";
import Profile from "../components/pages/Profile/Profile";
import PrivateRouter from "../components/pages/auth/PrivateRouter/PrivateRouter";
import About from "../components/pages/About Us/About";
import Contact from "../components/pages/Contact/Contact";



const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/profile",
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ])
    }
]);

export default router;