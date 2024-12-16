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
                loader: () => fetch('http://localhost:5000/visas')
            },
            {
                path: "/visa/:id",
                element: (
                    <PrivateRoute>
                        <VisaDetails />
                    </PrivateRoute>
                ),
                loader: ({params}) => fetch(`http://localhost:5000/visas/${params.id}`)
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