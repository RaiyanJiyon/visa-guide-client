import { useContext } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';
import SuccessToaster from '../components/toast/SuccessToaster';
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorToaster from '../components/toast/ErrorToaster';

const Register = () => {
    const { setUser, createUser, createUserWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        createUserWithGoogle()
        .then(() => {
            SuccessToaster('Successfully Sign In with Google');
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            ErrorToaster(error.message);
        });
    }

    const handleSignUpForm = e => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const photoURL = formData.get('photoURL');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        const userData = { name, email, photoURL, password, confirmPassword };
        console.log(userData);

        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!validPassword.test(password)) {
            ErrorToaster('Password should be at least 6 character and have at least 1 uppercase and 1 lowercase')
            return;
        }

        if (password !== confirmPassword) {
            ErrorToaster('Passwords do not match');
            return;
        }

        createUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user, {
                displayName: name,
                photoURL: photoURL
            })
            SuccessToaster('Successfully Signed In');
            navigate('/login');
            
        })
        .catch(error => {
            ErrorToaster(error.message);
        })
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900 md:py-40">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create your Free Account
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                            <div onClick={handleGoogleSignUp} className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                <FaGoogle />
                                <span className="text-sm font-medium">Log in with Google</span>
                            </div>
                            <div className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-not-allowed">
                                <FaApple />
                                <span className="text-sm font-medium">Log in with Apple</span>
                            </div>
                        </div>
                        <div className="divider">OR</div>
                        <form onSubmit={handleSignUpForm} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                                <input type="url" name="photoURL" id="photoURL" placeholder="photo url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;