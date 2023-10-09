import { useLoaderData } from "react-router-dom";
import Services from "../components/Service";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className="overflow-hidden">
            {/* Hero section start */}
            <div className=" md:min-h-screen mt-10 lg:mt-0">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat py-96 md:p-0"
                    style={{
                        backgroundPosition: '50%',
                        backgroundImage:
                            "url('https://img.freepik.com/premium-photo/professional-elderly-male-doctor-cardiologist-white-uniform-holding-stethoscope-his-hand-cardiology-medical-clinic-heart-treatment-concept-close-up-view-copy-space-high-quality-photo_297535-3008.jpg')",
                        height: '556px',
                    }}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                    >
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h1 className="mb-3 text-5xl font-bold" data-aos="zoom-out" data-aos-duration="2000">Health Hub</h1>
                                <h3 className="mb-8 text-3xl font-bold" data-aos="zoom-out" data-aos-duration="2000">Your Comprehensive Healthcare Resource</h3>
                                <p className="" data-aos="fade-up"
                                    data-aos-duration="3000">Welcome to HealthHub, your one-stop destination for all your healthcare needs. Whether you're looking for primary care, specialized medical services, mental health support, or emergency medical assistance, we've got you covered. Our website is designed to provide you with easy access to essential healthcare information and services. From finding the right doctor to learning about preventive health measures and rehabilitation options, HealthHub is your trusted partner on your journey to a healthier life. Explore our comprehensive range of healthcare services and resources, and take control of your well-being today. Your health, your hub!</p>
                                <button
                                    type="button"
                                    className="mt-8 inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#79AC78] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color="light" data-aos="fade-up"
                                    data-aos-duration="3000">Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero section end*/}

            {/* Service section start */}
            <div className="mb-10" data-aos="fade-up">
                <h1 className="text-gray-900 text-4xl font-bold text-center">Services</h1>
                <p className="text-center">Health is the basic right of people so providing good service is our main goal.</p>
            </div>
            <div className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-2">
                {
                    data.map(data => <Services key={data.id} data={data} />)
                }
            </div>
            {/* Service section end */}

            {/* meet Our Team section start */}

            <div className="flex flex-col mt-8" data-aos="flip-up" data-aos-duration="1000">
                <div className="container max-w-7xl px-4">
                    <div className="flex flex-wrap justify-center text-center mb-10">
                        <div className="w-full lg:w-6/12">
                            <h1 className="text-gray-900 text-4xl font-bold">Meet the Team</h1>
                            <p className="text-gray-700 text-lg font-light">With over 100 years of combined experience, we've got a well-seasoned team at the helm.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" /></a>
                                <div className="text-center mt-6"><h1 className="text-gray-900 text-xl font-bold mb-1">Tranter Jaskulski</h1>
                                    <div className="text-gray-700 font-light mb-2">Founder & Specialist</div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><FaFacebook className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><FaTwitter className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i className="mdi mdi-instagram text-sky-600 mx-auto mt-2"><FaLinkedin className="text-2xl" /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                                </a>
                                <div className="text-center mt-6">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">Denice Jagna</h1>
                                    <div className="text-gray-700 font-light mb-2">Tired & M. Specialist</div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><FaFacebook className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><FaTwitter className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i className="mdi mdi-instagram text-sky-600 mx-auto mt-2"><FaLinkedin className="text-2xl" /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                                </a>
                                <div className="text-center mt-6">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">Kenji Milton</h1>
                                    <div className="text-gray-700 font-light mb-2">Team Memeber</div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><FaFacebook className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><FaTwitter className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i className="mdi mdi-instagram text-sky-600 mx-auto mt-2"><FaLinkedin className="text-2xl" /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div className="flex flex-col">
                                <a href="#" className="mx-auto">
                                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80" />
                                </a>
                                <div className="text-center mt-6 text-[#000]">
                                    <h1 className="text-gray-900 text-xl font-bold mb-1">Doesn't matter</h1>
                                    <div className="text-gray-700 font-light mb-2">Will be fired</div>
                                    <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"><FaFacebook className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"><FaTwitter className="text-2xl" /></i>
                                        </a>
                                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i className="mdi mdi-instagram text-sky-600 mx-auto mt-2"><FaLinkedin className="text-2xl" /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* team section end */}

            {/* Testimonials section start */}
            <div className="container my-24 mx-auto md:px-6" data-aos="zoom-in">
                <section className="mb-32 text-center">
                    <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

                    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                            </div>
                            <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
                            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                                Marketing Manager
                            </h6>
                            <p className="mb-4">
                                Health Services Central simplified my healthcare search. Quick, easy, and a time-saver!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                    <path fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                </svg>
                            </p>
                            <ul className="mb-0 flex justify-center">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-12 md:mb-0">
                            <div className="mb-6 flex justify-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                            </div>
                            <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                                Sales Executive
                            </h6>
                            <p className="mb-4">
                                Health Services Hub made healthcare convenient. Highly recommended!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                    <path fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                </svg>
                            </p>
                            <ul className="mb-0 flex justify-center">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-0">
                            <div className="mb-6 flex justify-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                                    className="w-32 rounded-full shadow-lg dark:shadow-black/20" />
                            </div>
                            <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                                Teacher
                            </h6>
                            <p className="mb-4">
                                A lifesaver during a health crisis. Quick access to nearby services when I needed them most!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                                    <path fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                                </svg>
                            </p>
                            <ul className="mb-0 flex justify-center">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                                        <path fill="currentColor"
                                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* Testimonials section end */}
        </div>
    );
};

export default Home;