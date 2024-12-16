import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaApplicationModal from "../components/visa/VisaApplicationModal";

const VisaDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const visaData = useLoaderData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="w-11/12 mx-auto my-10 shadow-2xl p-10">
            <div className="relative h-96">
                <img className="h-full w-full rounded-lg" src={visaData.CountryImage} alt={`${visaData.CountryName} image`} />
                <h4 className="absolute bottom-4 left-4 text-2xl text-white font-extrabold">{visaData.CountryName}</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Visa Information
                    </h5>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Visa Type:</span> {visaData.Visa_Type}
                    </p>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Processing Time:</span> {visaData.Processing_Time}
                    </p>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Age Restriction:</span> {visaData.Age_Restriction}
                    </p>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Fee:</span> {visaData.Fee}
                    </p>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Validity:</span> {visaData.Validity}
                    </p>
                    <p className="text-slate-800 leading-normal text-sm">
                        <span className="font-bold">Application Method:</span> {visaData.Application_Method}
                    </p>
                </div>
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Required Documents
                    </h5>
                    <ul className="text-slate-600 leading-normal font-light pl-4">
                        {visaData.Required_Documents.map((document, index) => (
                            <li key={index} className="list-disc">{document}</li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Description
                    </h5>
                    <p className="text-slate-600 leading-normal font-light">
                        {visaData.Description}
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={openModal} className="btn bg-blue-600 text-white font-bold">Apply Now</button>
            </div>
        
            <VisaApplicationModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default VisaDetails;
