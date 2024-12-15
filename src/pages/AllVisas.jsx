import { useLoaderData } from "react-router-dom";

const AllVisas = () => {
    const allVisas = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                {
                    allVisas.map((visa, idx) => (
                        <div key={idx} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-40 m-2.5 overflow-hidden text-white rounded-md">
                                <img className="w-full h-full" src={visa.CountryImage} alt="card-image" />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    {visa.CountryName}
                                </h6>
                                <p className="text-slate-600 leading-normal font-light h-28">
                                    {visa.Description}
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2">
                                <button className="btn bg-blue-500 text-white font-bold">
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;