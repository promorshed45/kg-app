



'use client';
import Image from 'next/image';
import award from "@/assets/award.png";
import trippleline from "@/assets/tripple-line.webp";
import { GoPlay } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { fadeIn } from "/variants";
import { motion } from "framer-motion";

const Award = () => {
    return (
        <div>
            <section class="relative dark:text-gray-300 dark:bg-slate-950 py-10">
                <div class=" inset-0 to-transparent bg-gradient-to-r"> </div>
                <div class="flex mx-auto max-w-screen-xl px-4 py-32 sm:px-6 gap-10 lg:h-screen lg:items-center lg:px-8">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.2 }} className="w-1/2 flex  mx-auto relative">
                        <div className="mask mask-pentagon">
                            <Image src={award} alt="Banner Photo" />
                        </div>
                        <Image className="absolute -z-0 -bottom-14 right-10 rotate-45 animate-bounce" src={trippleline} alt="Banner Shape" />
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.2 }}
                        className="z-10 w-1/2 text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold md:text-5xl dark:text-secondary"> Best for Your Kids </h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Being brave isn’t always a grand gesture sometimes it just means having a go attempting that difficult question, offering an answer in a lesson when you’re simply really trying new.
                        </p>
                        <div>
                            <div className="mx-auto px-4 bg-primary rounded-xl sm:px-6 md:my-5 lg:px-8">
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
                                    <div> <IoIosArrowDropright className="text-xl text-primary hover:text-secondary" /></div>
                                    <div> <p className="text-lg">  We believe every child is intelligent so we care. </p></div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <div> <IoIosArrowDropright className="text-xl text-primary hover:text-secondary" /></div>
                                    <div> <p className="text-lg">  Teachers make a difference of your child. </p></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex flex-wrap gap-4 text-center items-center">
                            <button class="block w-full rounded-xl bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-foreground focus:outline-none focus:ring active:bg-primary sm:w-auto"> Apply Now </button>
                            <a target='_top' href="https://www.youtube.com/watch?v=NIk1-ck4c6Q">
                                <div className='bg-rose-200 w-12 h-12 flex justify-center items-center rounded-full'>
                                    <GoPlay className='text-secondary-foreground text-3xl absolute' />
                                    <div className='border border-secondary-foreground  w-10 h-10 flex justify-center items-center rounded-full animate-ping'>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class=" " > <span className='text-md font-medium text-primary'>Promotional Video</span>  </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Award;