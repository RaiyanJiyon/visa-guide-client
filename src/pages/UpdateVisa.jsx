import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const UpdateVisa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const allVisa = useLoaderData();
    const [filteredVisa, setFilteredVisa] = useState(null);

    useEffect(() => {
        if (allVisa) {
            const visa = allVisa.find(visa => visa._id === id);
            console.log("Filtered Visa:", visa);
            setFilteredVisa(visa);
        }
    }, [allVisa, id]);

    const handleUpdateVisaForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const CountryImage = formData.get('photoURL');
        const CountryName = formData.get('countryName');
        const Visa_Type = formData.get('visaType');
        const Processing_Time = formData.get('processingTime');
        const Age_Restriction = formData.get('age');
        const Fee = formData.get('fee');
        const Validity = formData.get('validity');
        const Application_Method = formData.get('applicationMethod');
        const Description = formData.get('description');
        const Required_Documents = Array.from(formData.getAll('requiredDocuments'));

        const visaData = {
            email: user.email,
            CountryImage: CountryImage,
            CountryName: CountryName,
            Visa_Type: Visa_Type,
            Processing_Time: Processing_Time,
            Age_Restriction: Age_Restriction,
            Fee: Fee,
            Validity: Validity,
            Application_Method: Application_Method,
            Description: Description,
            Required_Documents: Required_Documents,
        };
        console.log(visaData);

        fetch(`https://visa-guide-server-zeta.vercel.app/visa/${filteredVisa._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(visaData)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Visa update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/all-visas');
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Failed to update visa",
                    text: error.message,
                    showConfirmButton: true
                });
            });
    };

    return (
        <div>
            <div className="mt-10 mb-4 space-y-3">
                <h2 className="text-3xl font-bold text-center">
                    Visa Application Update
                </h2>
                <p className="font-medium text-center">
                    View and update the status of your visa applications with ease.
                </p>
            </div>

            <form onSubmit={handleUpdateVisaForm} className="card-body">
                {/* 1st row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Country Photo</span>
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            required
                            placeholder="Enter Your Country Photo URL"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.CountryImage || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, CountryImage: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Country Name</span>
                        </label>
                        <input
                            type="text"
                            name="countryName"
                            required
                            placeholder="Enter Your Country Name"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.CountryName || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, CountryName: e.target.value })
                            }
                        />
                    </div>
                </div>
                {/* 2nd row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Visa Type</span>
                        </label>
                        <select
                            name="visaType"
                            required
                            className="select select-info w-full"
                            value={filteredVisa?.Visa_Type || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Visa_Type: e.target.value })
                            }
                        >
                            <option disabled value="">
                                Select
                            </option>
                            <option>Tourist Visa</option>
                            <option>Student Visa</option>
                            <option>Official Visa</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Processing Time</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="processingTime"
                            placeholder="e.g., 10-15 days"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.Processing_Time || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Processing_Time: e.target.value })
                            }
                        />
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Age Restriction</span>
                        </label>
                        <input
                            type="number"
                            required
                            name="age"
                            placeholder="Enter Age Restriction"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.Age_Restriction || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Age_Restriction: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Fee</span>
                        </label>
                        <input
                            type="number"
                            required
                            name="fee"
                            placeholder="Enter Fee"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.Fee || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Fee: e.target.value })
                            }
                        />
                    </div>
                </div>
                {/* 4th row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Validity</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="validity"
                            placeholder="e.g., 6 months"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.Validity || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Validity: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Application Method</span>
                        </label>
                        <input
                            type="text"
                            required
                            name="applicationMethod"
                            placeholder="e.g., online"
                            className="input input-bordered input-info w-full"
                            value={filteredVisa?.Application_Method || ''}
                            onChange={(e) =>
                                setFilteredVisa({ ...filteredVisa, Application_Method: e.target.value })
                            }
                        />
                    </div>
                </div>
                {/* 5th row */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-medium">Description</span>
                    </label>
                    <textarea
                        name="description"
                        placeholder="Enter a description"
                        className="textarea textarea-bordered textarea-info textarea-md w-full"
                        value={filteredVisa?.Description || ''}
                        onChange={(e) =>
                            setFilteredVisa({ ...filteredVisa, Description: e.target.value })
                        }
                    ></textarea>
                </div>
                {/* 6th row */}
                <h3 className="font-medium text-sm mt-2">Required Documents</h3>
                <div className="grid md:grid-cols-2 gap-6 px-2 py-6 rounded-lg border border-sky-400">
                    {['Valid passport', 'Visa application form', 'Recent passport-sized photograph', 'National Identity Card'].map(
                        (doc) => (
                            <div className="form-control" key={doc}>
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="requiredDocuments"
                                        value={doc}
                                        checked={filteredVisa?.Required_Documents?.includes(doc)}
                                        onChange={(e) => {
                                            const updatedDocuments = e.target.checked
                                                ? [...(filteredVisa?.Required_Documents || []), doc]
                                                : (filteredVisa?.Required_Documents || []).filter((d) => d !== doc);
                                            setFilteredVisa({ ...filteredVisa, Required_Documents: updatedDocuments });
                                        }}
                                        className="checkbox border-sky-500  checkbox-accent"
                                    />
                                    <span className="label-text">{doc}</span>
                                </label>
                            </div>
                        )
                    )}
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-blue-600 text-white font-bold">Update Visa</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateVisa;
