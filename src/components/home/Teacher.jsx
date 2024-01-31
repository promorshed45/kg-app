import { LuMusic4 } from "react-icons/lu";
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import Image from "next/image";
import teacher1 from '@/assets/teacher1.jpg';
import teacher2 from '@/assets/teacher2.jpg';
import teacher3 from '@/assets/teacher3.jpg';
import teacher4 from '@/assets/teacher4.jpg';

const Teacher = () => {
    return (
        <div>
            <section class="text-gray-800 body-font">
                <div class="container px-24 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 "> Our Best Teachers </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> With the help of teachers and the environment as the third teacher, students
                            have opportunities to confidently take risks. </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">



                        <div class="space-y-4 group">
                            <div class="relative">
                                <Image src={teacher1} alt="Teacher Photo" class="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500 hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div class="flex absolute bottom-0 animate-pulse rounded-b-lg bg-rose-500 p-3 items-center w-full justify-center">
                                        <ul className="flex gap-6">
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Facebook</span>
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Instagram</span>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Twitter</span>
                                                    <IoLogoTwitter className="text-2xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <h4 class="text-xl font-semibold">Leroy Jenkins</h4>
                                <p class="text-sm dark:text-gray-400">Web developer</p>
                                <div class="flex mt-2 space-x-2">
                                </div>
                            </div>
                        </div>


                        <div class="space-y-4 group">
                            <div class="relative">
                                <Image src={teacher2} alt="Teacher Photo" class="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500 hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div class="flex absolute bottom-0 animate-pulse rounded-b-lg bg-rose-500 p-3 items-center w-full justify-center">
                                        <ul className="flex gap-6">
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Facebook</span>
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Instagram</span>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Twitter</span>
                                                    <IoLogoTwitter className="text-2xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <h4 class="text-xl font-semibold">Leroy Jenkins</h4>
                                <p class="text-sm dark:text-gray-400">Web developer</p>
                                <div class="flex mt-2 space-x-2">
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4 group">
                            <div class="relative">
                                <Image src={teacher3} alt="Teacher Photo" class="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500 hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div class="flex absolute bottom-0 animate-pulse rounded-b-lg bg-rose-500 p-3 items-center w-full justify-center">
                                        <ul className="flex gap-6">
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Facebook</span>
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Instagram</span>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Twitter</span>
                                                    <IoLogoTwitter className="text-2xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <h4 class="text-xl font-semibold">Leroy Jenkins</h4>
                                <p class="text-sm dark:text-gray-400">Web developer</p>
                                <div class="flex mt-2 space-x-2">
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4 group">
                            <div class="relative">
                                <Image src={teacher4} alt="Teacher Photo" class="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500 hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div class="flex absolute bottom-0 animate-pulse rounded-b-lg bg-rose-500 p-3 items-center w-full justify-center">
                                        <ul className="flex gap-6">
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Facebook</span>
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Instagram</span>
                                                    <FaInstagram className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-gray-800">
                                                    <span className="sr-only">Twitter</span>
                                                    <IoLogoTwitter className="text-2xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <h4 class="text-xl font-semibold">Leroy Jenkins</h4>
                                <p class="text-sm dark:text-gray-400">Web developer</p>
                                <div class="flex mt-2 space-x-2">
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teacher;