import { useEffect, useState } from "react";
import VisaCard from "../visa/VisaCard";

const LatestVisas = () => {
    const [latestVisas, setLatestVisas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featured-visas')
        .then(res => {
            if (!res.ok) {
                throw new Error("Data fetch issue");
            }
            return res.json();
        })
        .then(data => {
            setLatestVisas(data);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center space-y-3">
                <h2 className="text-3xl font-bold">Latest Visas</h2>
                <p className="text-gray-600">Featuring the latest available visas</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {latestVisas.map((visa, idx) => (
                    <VisaCard key={idx} visa={visa} />
                ))}
            </div>
        </div>
    );
};

export default LatestVisas;
