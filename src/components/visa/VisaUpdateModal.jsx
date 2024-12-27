import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const VisaUpdateModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdatedVisaForm = e => {
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

        fetch('http://localhost:5000/visas', {
            method: 'POST',
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
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Visa added successfully",
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
                    title: "Failed to add visa",
                    text: error.message,
                    showConfirmButton: true
                });
            });
    };

    return (
        <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open={isOpen} // Dynamically control visibility
        >
            <div className="modal-box">
                <form onSubmit={handleUpdatedVisaForm} className="card-body">
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
                                className="input input-bordered input-info w-full" />
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
                                className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Visa Type</span>
                            </label>
                            <select name="visaType" required className="select select-info w-full">
                                <option disabled selected>Select </option>
                                <option>Tourist Visa</option>
                                <option>Student Visa </option>
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
                                className="input input-bordered input-info w-full" />
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
                                className="input input-bordered input-info w-full" />
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
                                className="input input-bordered input-info w-full" />
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
                                placeholder="eg., 6 months"
                                className="input input-bordered input-info w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">Application Method</span>
                            </label>
                            <input
                                type="text"
                                required
                                name="applicationMethod"
                                placeholder="eg., online"
                                className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    {/* 5th row */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-medium">Description</span>
                        </label>
                        <textarea
                            name='description'
                            placeholder="Enter a description"
                            className="textarea textarea-bordered textarea-info textarea-md w-full"></textarea>
                    </div>
                    {/* 6th row */}
                    <h3 className="font-medium text-sm mt-2">Required Documents</h3>
                    <div className="grid md:grid-cols-2 gap-6 px-2 py-6 rounded-lg border border-sky-400">
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="requiredDocuments"
                                    value="Valid passport"
                                    required
                                    className="checkbox border-sky-500  checkbox-accent" />
                                <span className="label-text">Valid passport</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox"
                                    name="requiredDocuments"
                                    value="Visa application form"
                                    required
                                    className="checkbox border-sky-500  checkbox-accent" />
                                <span className="label-text">Visa application form</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox"
                                    name="requiredDocuments"
                                    value="Recent passport-sized photograph"
                                    className="checkbox border-sky-500  checkbox-accent" />
                                <span className="label-text">Recent passport-sized photograph</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer flex items-center gap-2">
                                <input type="checkbox"
                                    name="requiredDocuments"
                                    value="National Identity Card"
                                    className="checkbox border-sky-500 checkbox-accent" />
                                <span className="label-text">National Identity Card</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-blue-600 text-white font-bold">Add Visa</button>
                    </div>
                </form>
                <div className="modal-action w-full p-4 md:p-5">
                    <button onClick={onClose} className="btn w-full bg-red-500 text-white font-bold">
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default VisaUpdateModal;