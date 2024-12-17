import { Link, useLoaderData } from "react-router-dom";
import VisaCard from "../components/visa/VisaCard";

const AllVisas = () => {
    const allVisas = useLoaderData();
    return (
        <div className="">
            <div className="flex flex-col gap-2 py-10 bg-blue-500 text-white text-center">
                <h2 className="text-3xl font-bold">All Visas</h2>
                <p className="font-medium">Visa has developed a programme that helps confirm your identity when you make an online purchase.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-10">
                {
                    allVisas.map((visa, idx) => (
                        <VisaCard key={idx} visa={visa} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;