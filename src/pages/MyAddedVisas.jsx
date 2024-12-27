import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import VisaUpdateModal from "../components/visa/VisaUpdateModal";

const MyAddedVisas = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [addedVisas, setAddedVisas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/added-visa/${user.email}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network issue");
                }
                return res.json();
            })
            .then(data => {
                setAddedVisas(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [user.email]);

    return (
        <div className="w-11/12 mx-auto">
            {addedVisas.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                    {addedVisas.map((visa, index) => (
                        <div key={index} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-md">
                                <img className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110" src={visa.CountryImage} alt="card-image" />
                            </div>
                            <div className="p-4 space-y-2">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    {visa.CountryName}
                                </h6>
                                <p className="text-slate-800 leading-normal text-sm">
                                    <span className="font-bold">Visa Type:</span> {visa.Visa_Type}
                                </p>
                                <p className="text-slate-800 leading-normal text-sm">
                                    <span className="font-bold">Processing Time:</span> {visa.Processing_Time}
                                </p>
                                <p className="text-slate-800 leading-normal text-sm">
                                    <span className="font-bold">Fee:</span> {visa.Fee}
                                </p>
                                <p className="text-slate-800 leading-normal text-sm">
                                    <span className="font-bold">Validity:</span> {visa.Validity}
                                </p>
                                <p className="text-slate-800 leading-normal text-sm">
                                    <span className="font-bold">Application Method:</span> {visa.Application_Method}
                                </p>
                            <div className="flex justify-between gap-2 pt-4">
                                <button onClick={openModal} className="btn bg-green-500 text-white font-bold">Update</button>
                                <button className="btn bg-red-500 text-white font-bold">Delete</button>
                            </div>
                            </div>

                            <VisaUpdateModal isOpen={isModalOpen} onClose={closeModal} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-3xl font-bold text-center">
                        You have not added any visas yet!
                    </h1>
                </div>
            )}
        </div>
    );
};

export default MyAddedVisas;
