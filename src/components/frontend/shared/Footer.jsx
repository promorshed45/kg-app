import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import Image from "next/image";
import footershpa from "@/assets/curve-shape-footer.svg";
import footerbg from '@/assets/footerbg.jpg'


const Footer = () => {
    return (
        <div>
            <div className=''>
                <div className="relative overflow-hidden">
                    <div className='w-full h-full'>
                        <Image src={footerbg} alt='background image' className='absolute -z-10 w-full object-cover opacity-50' />
                    </div>
                    <section class="z-0 text-gray-700 body-font h-[540px] relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-muted/90 to-muted-foreground/90"></div>
                        <div class="absolute z-0  mx-auto text-white">
                            <footer className="">
                                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-20">
                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                        <div>
                                            <div className="flex justify-center text-primary sm:justify-start">
                                                <p className="text-5xl font-bold">MKA</p>
                                            </div>
                                            <p className="mt-6 max-w-md text-center leading-relaxed text-slate-950 sm:max-w-xs sm:text-left">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                                                cum itaque neque.
                                            </p>
                                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                                <li>
                                                    <a
                                                        href="/"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-primary transition hover:text-secondary">
                                                        <span className="sr-only">Facebook</span>
                                                        <FaFacebook className="text-2xl" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-primary transition hover:text-secondary">
                                                        <span className="sr-only">Instagram</span>
                                                        <FaInstagram className="text-2xl" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/"
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-primary transition hover:text-secondary">
                                                        <span className="sr-only">Twitter</span>
                                                        <IoLogoTwitter className="text-2xl" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
                                            <div className="grid grid-cols-2">
                                                <div className="text-center sm:text-left">
                                                    <header className=" font-medium normal-case text-2xl text-secondary"> Quick links </header>
                                                    <ul className="mt-8 space-y-3 text-lg">
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/"> About</a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Programs </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Classes </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Shop </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  News </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Contact </a> </li>
                                                    </ul>
                                                </div>
                                                <div className="text-center sm:text-left text-slate-950">
                                                    <header className=" font-medium normal-case text-2xl text-secondary"> Programs </header>
                                                    <ul className="mt-8 space-y-3 text-lg">
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/"> Play School </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Nursery </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Junior Kg </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Senior Kg </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Holiday Camp </a> </li>
                                                        <li><a className="text-slate-950 transition hover:text-secondary" href="/">  Day Care </a> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <header className=" font-medium normal-case text-2xl text-secondary text-center md:text-left"> Campus Address </header>
                                                    <div className="text-left">
                                                        <div className="space-y-4 mt-8 text-slate-950">
                                                            <div className="flex gap-5 items-center -ml-1">
                                                                <div> <IoLocationOutline className=" text-3xl text-primary hover:text-secondary " /></div>
                                                                <div> <p className="text-lg hover:text-secondary">Aysha Ali Mansion(Ground Floor),  Pahartali, Raozan, Chattogram</p></div>
                                                            </div>
                                                            <div className="flex gap-5 items-center">
                                                                <div> <MdOutlineMail className="text-2xl text-primary hover:text-secondary -mb-1" /></div>
                                                                <div> <p className="text-lg hover:text-secondary">  ctgmorshed45@gmail.com </p></div>
                                                            </div>
                                                            <div className="flex gap-5 items-center">
                                                                <div> <BsTelephone className="text-2xl text-primary hover:text-secondary -mb-1" /></div>
                                                                <div> <p className="text-lg hover:text-secondary">  +88 01851 363745 </p></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Image src={footershpa} alt="curve-shape-footer" className="pt-10" />
                                <div className="py-8 px-10 md:px-20">
                                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                                        <p className="text-sm text-slate-950">
                                            <span className="block sm:inline">All rights reserved.</span>
                                            <a className="inline-block text-primary underline transition hover:text-primary"
                                                href="/" >  Terms & Conditions  </a>
                                            <span>&middot;</span>
                                            <a className="inline-block text-primary underline transition hover:text-primary" href="/" > Privacy Policy </a>
                                        </p>
                                        <p className="mt-4 text-sm text-slate-950 sm:order-first sm:mt-0">&copy; 2022 Company Name</p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Footer;