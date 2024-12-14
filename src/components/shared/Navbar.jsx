import logo from '../../assets/images/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SuccessToaster from "../toast/SuccessToaster";
import ErrorToaster from "../toast/ErrorToaster";

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-medium underline'
                        : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/all-visas"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-medium underline'
                        : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                }
            >
                All Visas
            </NavLink>
            <NavLink
                to="/add-visa"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-medium underline'
                        : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                }
            >
                Add Visa
            </NavLink>
            <NavLink
                to="/my-added-visas"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-medium underline'
                        : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                }
            >
                My Added Visa
            </NavLink>
            <NavLink
                to="/my-applications"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-medium underline'
                        : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                }
            >
                My Visa Application
            </NavLink>
            {user && (
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-600 font-medium underline'
                            : 'text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400'
                    }
                >
                    My Profile
                </NavLink>
            )}
        </>
    );

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                SuccessToaster('Log out successfully');
                navigate('/login');
            })
            .catch(error => {
                ErrorToaster(error.message);
            });
    };

    return (
        <div className="navbar border-gray-200 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl text-black">
                    <img className='w-6' src={logo} alt="logo" />
                    Visa Guide
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Profile image"
                                    src={user.photoURL || "https://via.placeholder.com/150"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-500 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/profile/update">Update Profile</Link></li>
                            <li onClick={handleSignOut}><a>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <div>

                    <Link to={'/login'}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                    </Link>
                    <Link to={'/register'}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
                    </Link>
                </div>
                )}
            </div>
        </div>
    );
};

export default Header;
