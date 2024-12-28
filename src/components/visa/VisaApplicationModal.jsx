import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const VisaApplicationModal = ({ isOpen, onClose, visaData }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { user } = useContext(AuthContext);

    const handleVisaApplicationForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email');
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const applied_date = formData.get('applied_date');
        const fee = formData.get('fee');

        const visaInformation = { email, firstName, lastName, applied_date, fee, visaData };
        console.log(visaInformation);

        fetch('https://visa-guide-server-zeta.vercel.app/visa-application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(visaInformation)
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
                    title: "Submission Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                onClose();
            }
        })
        .catch(error => {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Submission Failed",
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
                <form onSubmit={handleVisaApplicationForm} className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={user.email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type email name"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="firstName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your First Name"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="lastName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter Your Last Name"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="applied_date"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Applied Date
                            </label>
                            <input
                                type="date"
                                name="applied_date"
                                id="applied_date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label
                                htmlFor="fee"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Fee
                            </label>
                            <input
                                type="number"
                                name="fee"
                                id="fee"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="$"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Submit Application
                    </button>
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

export default VisaApplicationModal;