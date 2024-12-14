import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SuccessToaster from '../toast/SuccessToaster';
import ErrorToaster from '../toast/ErrorToaster';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            SuccessToaster('Log out successfully');
            navigate('/login')
        })
        .catch(error => {
            ErrorToaster(error.message);
        })
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between lg:justify-center gap-10 mx-auto py-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Visa Guide</span>
                </Link>
                <button
                    onClick={toggleNavbar}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex items-center justify-center lg:w-auto lg:gap-4 xl:gap-10`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'block py-2 px-3 text-blue-700 underline bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent'}>
                            Home
                        </NavLink>
                        <NavLink to={'/all-visas'} className={({ isActive }) => isActive ? 'block py-2 px-3 text-blue-700 underline bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent'}>
                            All Visas
                        </NavLink>
                        <NavLink to={'/add-visa'} className={({ isActive }) => isActive ? 'block py-2 px-3 text-blue-700 underline bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent'}>
                            Add Visa
                        </NavLink>
                        <NavLink to={'/my-added-visas'} className={({ isActive }) => isActive ? 'block py-2 px-3 text-blue-700 underline bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent'}>
                            My Added Visas
                        </NavLink>
                        <NavLink to={'/my-applications'} className={({ isActive }) => isActive ? 'block py-2 px-3 text-blue-700 underline bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent'}>
                            My Visa Applications
                        </NavLink>
                    </ul>
                    <div className='flex gap-2 lg:gap-2 lg:ml-4 mt-4 lg:mt-0'>
                        {
                            user ?
                                <div className='flex items-center gap-4'>
                                    <div tabIndex={0} role="button" className="hidden lg:flex btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="profile image"
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <button onClick={handleSignOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</button>
                                </div>
                                :
                                <div>

                                    <Link to={'/login'}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                                    </Link>
                                    <Link to={'/register'}>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
                                    </Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
