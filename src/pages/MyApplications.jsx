import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyApplications = () => {
    const [visaApplication, setVisaApplication] = useState([]);

    useEffect(() => {
        fetch('https://visa-guide-server-zeta.vercel.app/visa-application')
            .then(res => {
                if (!res.ok) {
                    throw new Error("Data fetch issue");
                }
                return res.json();
            })
            .then(data => {
                setVisaApplication(data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleDeleteVisaApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-guide-server-zeta.vercel.app/visa-application/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setVisaApplication(visaApplication.filter(visa => visa._id !== id));
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting visa:', error);
                        Swal.fire({
                            title: "Error!",
                            text: "There was an error deleting the visa.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className="w-11/12 mx-auto">
            {
                visaApplication.length > 0 ?
                    <>
                        <div className="mt-10 mb-4 space-y-3">
                            <h2 className="text-3xl font-bold text-center">
                                Manage Your Visa Applications
                            </h2>
                            <p className="font-medium text-center">
                                Track the status of your visa applications and manage your requests
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {
                                visaApplication.map((visa, idx) => (
                                    <div key={idx} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                                        <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-md">
                                            <img className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110" src={visa.visaData.CountryImage} alt="card-image" />
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                                {visa.visaData.CountryName}
                                            </h6>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Visa Type:</span> {visa.visaData.Visa_Type}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Processing Time:</span> {visa.visaData.Processing_Time}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Fee:</span> {visa.visaData.Fee}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Validity:</span> {visa.visaData.Validity}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Application Method:</span> {visa.visaData.Application_Method}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Applied Date:</span> {visa.visaData.Applied_Date}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">
                                                    Applicant&apos;s Name:</span> {visa.firstName.concat(" ", visa.lastName)}
                                            </p>
                                            <p className="text-slate-800 leading-normal text-sm">
                                                <span className="font-bold">Applicant&apos;s Email:</span> {visa.email}
                                            </p>
                                            <div className="w-full pt-6">
                                                <button onClick={() => handleDeleteVisaApplication(visa._id)} className="btn w-full bg-red-500 text-white font-bold">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    :
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <h1 className="text-3xl font-bold text-center h-screen flex flex-col justify-center items-center">
                            You have not added any visa application yet!
                        </h1>
                    </div>
            }
        </div>
    );
};

export default MyApplications;