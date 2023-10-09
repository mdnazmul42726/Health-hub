import { Link, NavLink, Outlet } from 'react-router-dom';
import logo2 from './assets/Screenshot.png';
import logoPng from './assets/Screenshot-removebg-preview.png';
import { useContext, useEffect } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { AiFillWarning } from 'react-icons/ai';

const Root = () => {
    const { user, LogOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        LogOut().then(result => console.log(result)).catch(err => console.log(err));
    };

    useEffect(() => {
        document.title = 'Home'
    }, []);

    return (
        <div className=''>
            <div className="navbar bg-base-100 flex justify-between shadow-md fixed z-50 shadow-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className=''>
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Contact</NavLink>
                            </li>
                            {user && <li>
                                <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Blog</NavLink>
                            </li>}
                            {user && <li>
                                <NavLink to="/purchase" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>My Purchase</NavLink>
                            </li>}
                            <div className="">
                                {user ? <li>
                                    <button onClick={handleLogOut} id="ok-btn"
                                        className="uppercase px-3 mt-2 py-1 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm ">Logout
                                    </button>
                                </li> :
                                    <li>
                                        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Login</NavLink>

                                    </li>}
                            </div>
                        </ul>
                    </div>
                    <div className="flex items-center gap-3" data-aos="fade-right">
                        <Link to={"/"}><img className=' lg:w-[30%]' src={logo2} alt="" /></Link>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <div className="navbar-end hidden lg:flex items-center" data-aos="fade-left">
                        <ul className="flex gap-3">
                            <div className="flex gap-3 items-center">
                                <li className=''>
                                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Home</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Contact</NavLink>
                                </li>
                                {user && <li>
                                    <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Blog</NavLink>
                                </li>}
                                {user && <li>
                                    <NavLink to="/purchase" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Purchase</NavLink>
                                </li>}
                            </div>
                            {user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80">
                                    <li><a>{user.displayName}</a></li>
                                    <li><a>{user.email}</a></li>
                                    <li><a onClick={() => document.getElementById('my_modal_3').showModal()}>Logout</a></li>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
                                        ><div className="mt-3 text-center">
                                                <div className="mx-auto flex items-center justify-center">
                                                    <AiFillWarning className='text-4xl text-red-600`' />
                                                </div>
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">Are You Sure?</h3>
                                                <div className="mt-2 px-7 py-3">
                                                    <p className="text-sm text-gray-500">
                                                        Do you want to log out?
                                                    </p>
                                                </div>
                                                <div className="items-center px-4 py-3">

                                                    <form method="dialog">
                                                        <button className="uppercase mb-3 px-4 py-2 bg-sky-400 text-white text-base font-medium rounded-md w-full shadow-sm">Cancel</button>
                                                    </form>
                                                    <button onClick={handleLogOut} id="ok-btn"
                                                        className="uppercase px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm ">Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                                </ul>
                            </div> :
                                <li>
                                    <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#79AC78] font-bold" : ""}>Login</NavLink>
                                </li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto pt-16"><Outlet /></div>
            {/* footer */}
            <div className="">

                <footer className="bg-white shadow dark:bg-gray-900">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <img className='w-[25%] rounded-full' src={logoPng} alt="" />
                            </div>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <Link className="mr-4 hover:underline md:mr-6" to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link className="mr-4 hover:underline md:mr-6" to={"privacy-policy"}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                                </li>
                                <li>
                                    <Link className="hover:underline" to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Sheikh Mohammad Nazmul H.™ All Rights Reserved.</span>
                    </div>
                </footer>


            </div>
        </div>
    );
};

export default Root;