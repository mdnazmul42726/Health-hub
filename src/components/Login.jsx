import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [showPassword, setPassword] = useState(false);
    const { logInWithEmailAndPassword, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInWithEmailAndPassword(email, password).then(result => {
            navigate('/')
        }).catch(err => {
            console.log(err.code);

            if (err.code == "auth/invalid-login-credentials") {
                toast.error('Email or password is incorrect')
            }
        })

    };

    const googleLogin = () => {
        signInWithGoogle().then(() => {
            navigate("/")
        })
    }

    useEffect(() => {
        document.title = 'Login'
    }, []);

    return (
        <div className="min-h-screen">
            <div className="">
                <form className="md:w-96 items-center mx-auto shadow-md p-7 rounded-md mt-10" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Email Address</label>
                        <input type="email" id="name" name="email" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email Address" required />
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium">Password</label>
                        <input type={showPassword ? "text" : "password"} id="name" name="password" className="shadow-sm bg-[#eee] border border-gray-300 text-sm text-[#000] rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Password" required />
                        <div className="flex justify-end -mt-7 mr-3 cursor-pointer"> <p onClick={() => setPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</p> </div>
                    </div>
                    <p className="text-sm mb-4 cursor-pointer hover:text-sky-500">Forgot Your Password?</p>
                    <button type="submit" className="bg-[#113946] hover:bg-[#113946] btn text-[#fff] w-full p-2.5 rounded-sm">Login</button>
                    <div className="mt-3">
                        <p className="btn w-full w-full p-2.5 rounded-sm" onClick={googleLogin}><FaGoogle />Sign In With Google</p>
                    </div>
                    <p className="text-center mt-4 text-sm">Don’t Have An Account ? <Link to={"/register"} className="text-[#FF6969] hover:underline">Register</Link></p>
                </form>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Login;