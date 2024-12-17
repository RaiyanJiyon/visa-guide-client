import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="sticky top-0 z-10">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;