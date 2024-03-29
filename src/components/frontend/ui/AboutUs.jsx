'use client';
import Image from 'next/image';
import school from "@/assets/school.png";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { fadeIn } from "/variants";
import { motion, easeInOut, easeIn } from "framer-motion";
const AboutUs = () => {
    return (
        <div>
            <section className="relative dark:bg-slate-950">
                <div className="inset-0 to-transparent bg-gradient-to-r"></div>
                <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 gap-10">
                    <motion.div
                    variants={fadeIn('right',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.4}}
                     className="z-10 w-1/2 text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold md:text-5xl dark:text-secondary"> Know More About School </h1>

                        <div className="mt-8">
                            <div className="flow-root">
                                <div className="-my-8 divide-y divide-gray-300">
                                    <details className="group py-8  [&_summary::-webkit-details-marker]:hidden" open>
                                        <summary className="flex cursor-pointer items-center justify-between text-gray-900 dark:text-gray-300">
                                            <h2 className="text-lg font-medium"> What Is The Best Age To Start Kindergarten? </h2>
                                            <span className="relative h-5 w-5 shrink-0 pb-6">
                                            <IoAddCircleOutline className="absolute inset-0 text-2xl text-primary opacity-100 group-open:opacity-0"/>
                                            <IoRemoveCircleOutline className="absolute inset-0 text-2xl text-primary opacity-0 group-open:opacity-100"/>
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-500">
                                        Some states and countries implement mandatory early childhood education. With such rules, many preschool and kindergarten learning centers are built.
                                        </p>
                                    </details>

                                    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-300">
                                            <h2 className="text-lg font-medium"> Which Is The Best Preschool For Your Child ?</h2>

                                            <span className="relative h-5 w-5 shrink-0 pb-6">
                                            <IoAddCircleOutline className="absolute inset-0 text-2xl text-primary opacity-100 group-open:opacity-0"/>
                                            <IoRemoveCircleOutline className="absolute inset-0 text-2xl text-primary opacity-0 group-open:opacity-100"/>
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-500">
                                        Right after you book your party, you’ll receive an email confirming the date, time, and details about what’s included in the package you’ve selected result.
                                        </p>
                                    </details>
                                    <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-gray-300">
                                            <h2 className="text-lg font-medium"> What Is The Toution Fee On First Year? </h2>

                                            <span className="relative h-5 w-5 shrink-0 pb-6">
                                            <IoAddCircleOutline className="absolute inset-0 text-2xl text-primary opacity-100 group-open:opacity-0"/>
                                            <IoRemoveCircleOutline className="absolute inset-0 text-2xl text-primary opacity-0 group-open:opacity-100"/>
                                            </span>
                                        </summary>

                                        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-500">
                                        There will also be some fantastic outdoor entertainment, desserts and drinks, plus tours of the School for those who want to continue the celebrations.
                                        </p>
                                    </details>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.div
                    variants={fadeIn('left',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.4}}
                     className="w-1/2 flex mx-auto relative">
                        <div className="mask mask-squircle">
                            <Image src={school} alt="Banner Photo" />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;