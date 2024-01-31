import Image from 'next/image';
import banner2 from "../../assets/banner2.webp";
import trippleline from "../../assets/tripple-line.webp";
import { GoPlay } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";

const Award = () => {
    return (
        <div>
            <section class="relative">
                <div class=" inset-0 to-transparent bg-gradient-to-r"> </div>
                <div class=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="w-1/2 flex  mx-auto relative">
                        <div className="mask mask-pentagon">
                            <Image src={banner2} alt="Banner Photo" />
                        </div>
                        <Image className="absolute -z-0 -bottom-14 right-10 rotate-45 animate-bounce" src={trippleline} alt="Banner Shape" />
                    </div>
                    <div className="z-10 w-1/2 text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold md:text-5xl"> Best for Your Kids </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.
                        </p>

                        <div>
                            <div className="mx-auto px-4 bg-teal-600 rounded-xl sm:px-6 md:my-5 lg:px-8">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-5 sm:divide-x sm:divide-gray-100 text-white">
                                    <div className="flex flex-col px-4 text-center">
                                        <p className="order-last text-lg font-medium">Years of experience</p>
                                        <p className="text-4xl font-semibold  md:text-5xl">14+</p>
                                    </div>

                                    <div className="flex flex-col px-4 text-center">
                                        <p className="order-last text-lg font-medium"> Students each year </p>
                                        <p className="text-4xl font-semibold  md:text-5xl">7K+</p>
                                    </div>

                                    <div className="flex flex-col px-4 text-center">
                                        <p className="order-last text-lg font-medium"> Award Wining </p>
                                        <p className="text-4xl font-semibold  md:text-5xl"> 15+</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <div className="space-y-2 mt-8">
                                <div className="flex gap-5 items-center">
                                    <div> <IoIosArrowDropright className="text-xl text-teal-500 hover:text-rose-400" /></div>
                                    <div> <p className="text-lg">  We believe every child is intelligent so we care. </p></div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <div> <IoIosArrowDropright className="text-xl text-teal-500 hover:text-rose-400" /></div>
                                    <div> <p className="text-lg">  Teachers make a difference of your child. </p></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex flex-wrap gap-4 text-center items-center">
                            <button class="block w-full rounded-xl bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"> Apply Now </button>
                            <a target='_top' href="https://www.youtube.com/watch?v=NIk1-ck4c6Q">
                                <div className='bg-rose-200 w-12 h-12 flex justify-center items-center rounded-full'>
                                    <GoPlay className='text-rose-600 text-3xl absolute' />
                                    <div className='border border-rose-600  w-10 h-10 flex justify-center items-center rounded-full animate-ping'>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class=" " > <span className='text-md font-medium text-teal-600'>Promotional Video</span>  </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Award;