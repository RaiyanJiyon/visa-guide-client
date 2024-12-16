import { Link, useLoaderData } from "react-router-dom";

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
                        <div key={idx} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-md">
                                <img className="w-full h-full" src={visa.CountryImage} alt="card-image" />
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
                            </div>
                            <Link to={`/visa/${visa._id}`} className="px-4 pb-4 pt-0 mt-2">
                                <button className="btn bg-blue-500 text-white font-bold">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;