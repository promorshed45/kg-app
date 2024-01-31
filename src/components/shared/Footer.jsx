import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import Image from "next/image";
import footershpa from "@/assets/curve-shape-footer.svg";


const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-r from-rose-50  to-teal-50">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-20">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-500 sm:justify-start">
                                <p className="text-5xl font-bold">MKA</p>
                            </div>

                            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                                cum itaque neque.
                            </p>
                            {/* Social Icon */}
                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                <li>
                                    <a
                                        href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-rose-400">
                                        <span className="sr-only">Facebook</span>
                                        <FaFacebook className="text-2xl"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-rose-400">
                                        <span className="sr-only">Instagram</span>
                                        <FaInstagram className="text-2xl"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-teal-500 transition hover:text-rose-400">
                                        <span className="sr-only">Twitter</span>
                                        <IoLogoTwitter className="text-2xl"/>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">

                            <div className="grid grid-cols-2">
                                <div className="text-center sm:text-left">
                                    <header className=" font-medium normal-case text-2xl text-rose-600"> Quick links </header>
                                    <ul className="mt-8 space-y-3 text-lg">
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/"> About</a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Programs </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Classes </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Shop </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  News </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Contact </a> </li>
                                    </ul>
                                </div>
                                <div className="text-center sm:text-left">
                                    <header className=" font-medium normal-case text-2xl text-rose-600"> Programs </header>
                                    <ul className="mt-8 space-y-3 text-lg">
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Play School </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Nursery </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Junior Kg </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Senior Kg </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Holiday Camp </a> </li>
                                        <li><a className="text-gray-700 transition hover:text-gray-700/75" href="/">  Day Care </a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <header className=" font-medium normal-case text-2xl text-rose-600 text-center md:text-left"> Campus Address </header>
                                    <div className="text-left">
                                        <div className="space-y-4 mt-8">
                                            <div className="flex gap-5 items-center -ml-1">
                                                <div> <IoLocationOutline className=" text-3xl text-teal-500 hover:text-rose-400 " /></div>
                                                <div> <p className="text-lg">Aysha Ali Mansion(Ground Floor),  Pahartali, Raozan, Chattogram</p></div>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div> <MdOutlineMail  className="text-2xl text-teal-500 hover:text-rose-400 -mb-1"/></div>
                                                <div> <p className="text-lg">  ctgmorshed45@gmail.com </p></div>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div> <BsTelephone   className="text-2xl text-teal-500 hover:text-rose-400 -mb-1" /></div>
                                                <div> <p className="text-lg">  +88 01851 363745 </p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Image src={footershpa} alt="curve-shape-footer" className="pt-10"/>
                    <div className="py-8  px-10">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500">
                                <span className="block sm:inline">All rights reserved.</span>
                                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/" >  Terms & Conditions  </a>
                                <span>&middot;</span>
                                <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                                    href="/" > Privacy Policy </a>
                            </p>
                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2022 Company Name</p>
                        </div>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;