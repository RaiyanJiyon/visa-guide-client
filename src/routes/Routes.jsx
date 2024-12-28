import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyApplications from "../pages/MyApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VisaDetails from "../pages/VisaDetails";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import UpdateVisa from "../pages/UpdateVisa";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-visas",
                element: <AllVisas />,
                loader: () => fetch('https://visa-guide-server-zeta.vercel.app/visas')
            },
            {
                path: "/visa/:id",
                element: (
                    <PrivateRoute>
                        <VisaDetails />
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`https://visa-guide-server-zeta.vercel.app/visas/${params.id}`)
            },
            {
                path: "/add-visa",
                element: (
                    <PrivateRoute>
                        <AddVisa />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-added-visas",
                element: (
                    <PrivateRoute>
                        <MyAddedVisas />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-applications",
                element: (
                    <PrivateRoute>
                        <MyApplications />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-visa/:id",
                element: (
                    <PrivateRoute>
                        <UpdateVisa />
                    </PrivateRoute>
                ),
                loader: () => fetch('https://visa-guide-server-zeta.vercel.app/visas')
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;