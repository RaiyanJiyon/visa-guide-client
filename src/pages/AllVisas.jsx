import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import VisaCard from "../components/visa/VisaCard";

const AllVisas = () => {
    const allVisas = useLoaderData();
    const [filter, setFilter] = useState('All Visas');

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
    };

    const filteredVisas = filter === 'All Visas' ? allVisas : allVisas.filter(visa => visa.Visa_Type === filter);

    return (
        <div className="w-11/12 mx-auto">
            <div className="mt-10 mb-4">
                <h2 className="text-3xl font-bold text-center">
                    Visa Application Management
                </h2>
                <p className="font-medium text-center">
                    View and manage the status of your visa applications with ease.
                </p>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 bg-sky-600 text-white font-bold">Filtered By</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a onClick={() => handleFilterChange('All Visas')}>All Visas</a></li>
                    <li><a onClick={() => handleFilterChange('Tourist Visa')}>Tourist Visa</a></li>
                    <li><a onClick={() => handleFilterChange('Student Visa')}>Student Visa</a></li>
                    <li><a onClick={() => handleFilterChange('Official Visa')}>Official Visa</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {
                    filteredVisas.map((visa, idx) => (
                        <VisaCard key={idx} visa={visa} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;
