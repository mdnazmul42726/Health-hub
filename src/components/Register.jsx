import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, } from 'react-icons/fa';
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const [showPassword, setPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const { signUpWithEmailAndPassword, updateUserProfile } = useContext(AuthContext);
    
    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.accName.value;
        const ImgUrl = e.target.ImgUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!passwordPattern.test(password)) {
            toast.error('Your Password Must have minimum eight characters, at least one letter, one number and one special character');
            return
        } else if (password != conPassword) {
            toast.error("Password did not match!");
            return;
        }

        signUpWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up 
                toast.success('Account created successfully');
                updateUserProfile(name, ImgUrl);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;

                if (errorCode == 'auth/email-already-in-use') {
                    toast.error('Email already in use')
                }
                // ..
            });

    };

    useEffect(() => {
        document.title = 'Register'
    }, []);

    return (
        <div className="min-h-screen">
            <div>
                <div className="">
                    <form className="md:w-96 items-center mx-auto shadow-md p-7 rounded-md mt-10" onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Your Name</label>
                            <input type="text" id="name" name="accName" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Your Picture URL</label>
                            <input type="text" id="url" name="ImgUrl" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Profile Picture URL" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Your Email</label>
                            <input type="email" id="name" name="email" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium">Password</label>
                            <input type={showPassword ? "text" : "password"} id="name" name="password" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Strong Password" required />
                            <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                        </div>
                        <div className="mb-3">
                            <label className="block mb-2 text-sm font-medium">Confirm Password</label>
                            <input type={showConPassword ? "text" : "password"} id="name" name="conPassword" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirm Password" required />
                            <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={() => setShowConPassword(!showConPassword)}>{showConPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" name="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                        </div>
                        <button type="submit" className="bg-[#113946] hover:bg-[#113946] btn text-[#fff] w-full p-2.5 rounded-sm">Register</button>
                        <p className="text-center mt-4 text-sm">Have An Account ? <Link to={"/login"} className="text-[#FF6969] hover:underline">Login</Link></p>

                    </form>
                </div>
                <div><Toaster /></div>
            </div>
        </div>
    );
};

export default Register;