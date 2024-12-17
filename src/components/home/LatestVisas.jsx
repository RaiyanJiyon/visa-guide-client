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
        <div>
            <h1>Latest Visas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {latestVisas.map((visa, idx) => (
                    <VisaCard key={idx} visa={visa} />
                ))}
            </div>
        </div>
    );
};

export default LatestVisas;
