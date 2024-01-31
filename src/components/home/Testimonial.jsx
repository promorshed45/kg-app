import Image from 'next/image';
import Parents from "@/assets/motherteach.jpg";
import trippleline from "../../assets/tripple-line.webp";
import { GoPlay } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import bg1 from '@/assets/bg-1.jpg'
import Slider from './Slider';



const Testimonial = () => {
    return (
        <div>
            <div class="flex flex-col md:flex-row">
                <div className="w-1/2 flex-grow ">
                    <div className="relative ">
                        <div className='w-full'>
                            <Image src={Parents} alt='background image' className='absolute -z-10 w-full h-full object-cover opacity-80' />
                        </div>
                        <section class="z-0 text-gray-700 body-font h-lvh relative flex justify-center items-center">
                            <div class="absolute inset-0 bg-gradient-to-r from-rose-700/40 to-teal-700/40 opacity-80"></div>

                            <a target='_top' href="https://www.youtube.com/watch?v=NIk1-ck4c6Q">
                                <div className='w-20 h-20 flex justify-center items-center rounded-full'>
                                    <GoPlay className='text-white text-7xl absolute' />
                                    <div className='border-2 border-white  w-20 h-20 flex justify-center items-center rounded-full animate-ping'></div>
                                </div>
                            </a>

                        </section>
                    </div>
                </div>
                <div className="flex  w-1/2 px-10 bg-gradient-to-r from-purple-400 to-rose-400 ">
                    <div className="flex flex-col ">
                        <h2 className=" text-4xl font-semibold text-white sm:text-5xl pt-10 pl-5"> Parents Says  </h2>
                        <blockquote className="pt-5">
                            <div className="flex flex-col sm mx-4 my-6 bg-white/30 rounded-xl shadow-lg">
                                <div className="px-8 py-12 rounded-t-lg dark:bg-gray-900">
                                    <p className="relative py-1 text-lg italic text-center dark:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-rose-100">
                                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                        </svg> 
                                        <p className='px-10'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere. </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-rose-100">
                                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                        </svg>
                                    </p>
                                </div>
                                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                                    <p className="text-xl font-semibold leadi">Distinctio Animi</p>
                                    <p className="text-sm uppercase">Aliquam illum</p>
                                </div>
                            </div>
                        </blockquote>
                        <div className="flex justify-center pt-5 space-x-2">
                            <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full bg-gray-50"></button>
                            <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full bg-gray-800"></button>
                            <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full bg-gray-800"></button>
                            <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-800"></button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Testimonial;