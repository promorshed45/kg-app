'use client';
import Image from 'next/image';
import React from 'react';
import program1 from '@/assets/program-1.webp'
import program2 from '@/assets/program-2.webp'
import program3 from '@/assets/program-3.webp'
import Link from 'next/link';
import { fadeIn } from "/variants";
import { motion, easeInOut, easeIn } from "framer-motion";

const Program = () => {
    return (
        <div>
            <section class="text-gray-700 body-font bg-gradient-to-r from-gradientSecondary  to-gradientPrimary">
                <div class="container px-24 py-24 mx-auto">
                    <motion.div
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-primaryLight"> Our Programs </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Kindedo opened its doors in 1984 with a unique vision to provide its students
                            with a globally focused study of arts. </p>
                    </motion.div>


                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                        {Programs.map((data, index) => (
                            <motion.div key={index}
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.1 }}>
                            <Link href="#" className="group relative block overflow-hidden rounded-xl">
                                <Image
                                    src={data.photo} width={750} height={700} alt="Student Photo"
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                                <div className="relative border border-gray-100 bg-white p-4">
                                    <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                                        <h1 className="text-3xl font-semibold md:text-3xl"> {data.title} </h1>
                                        <p className="mt-2 md:text-lg/relaxed"> {data.description} </p>
                                        <div>
                                            <div style={{ backgroundColor: data.info.bgColor }} className="mx-auto rounded-xl md:my-3">
                                                <div className="grid grid-cols-1 sm:grid-cols-3 py-3 divide-dashed sm:divide-x sm:divide-gray-100 text-white">
                                                    <div className="text-center">
                                                        <p className="text-4xl font-semibold  md:text-xl"> {data.info.age} Yrs </p>
                                                        <p className="text-lg font-medium"> age </p>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="text-lg font-semibold  md:text-xl"> {data.info.week} Days </p>
                                                        <p className="text-md font-medium"> weekly </p>
                                                    </div>

                                                    <div className="text-center">
                                                        <p className="text-lg font-semibold  md:text-xl">{data.info.period} Hrs </p>
                                                        <p className="text-md font-medium"> period </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <form className="mt-4">
                                        <button
                                            className="w-full rounded bg-primaryLight p-3 text-md font-medium transition hover:animate-pulse">
                                            View More
                                        </button>
                                    </form>
                                </div>
                            </Link>
                        </motion.div>
                        ))}
                        



                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;

const Programs = [
    {
        "title": "Nursery",
        "description": "Early childhood education for toddlers. Building social skills and creativity.",
        "photo": "/programs/nursery.jpg",
        "info": {
            "age": "2-3",
            "week": "5",
            "period": "Morning",
            "bgColor": "#40A2E3"
        }
    },
    {
        "title": "KG",
        "description": "Introduction to basic concepts through fun activities. Preparing for school.",
        "photo": "/programs/kg.jpg",
        "info": {
            "age": "3-4",
            "week": "5",
            "period": "Morning",
            "bgColor": "#29ADB2"
        }
    },
    {
        "title": "KG One",
        "description": "Expanding knowledge with structured play. Fostering independence and curiosity.",
        "photo": "/programs/kg1.jpg",
        "info": {
            "age": "4-5",
            "week": "5",
            "period": "Morning",
            "bgColor": "#FA7070"
        }
    },
    // {
    //     "title": "KG Two",
    //     "description": "Developing literacy and numeracy skills. Encouraging critical thinking and problem-solving.",
    //     "photo": "/programs/kg2.jpg",
    //     "info": {
    //         "age": "5-6",
    //         "week": "5",
    //         "period": "Morning",
    //         "bgColor": "#BC7AF9"
    //     }
    // },
    // {
    //     "title": "KG Three",
    //     "description": "Advancing academic skills with hands-on learning. Preparing for elementary school.",
    //     "photo": "/programs/kg3.jpg",
    //     "info": {
    //         "age": "6-7",
    //         "week": "5",
    //         "period": "Morning",
    //         "bgColor": "#FF6464"
    //     }
    // },
    // {
    //     "title": "KG Four",
    //     "description": "Enhancing comprehension and communication. Building confidence for future learning.",
    //     "photo": "/programs/kg4.jpg",
    //     "info": {
    //         "age": "7-8",
    //         "week": "5",
    //         "period": "Morning",
    //         "bgColor": "#9400D3"
    //     }
    // },
    // {
    //     "title": "KG Five",
    //     "description": "Final preparation for primary education. Strengthening academic foundations.",
    //     "photo": "/programs/kg5.jpg",
    //     "info": {
    //         "age": "8-9",
    //         "week": "5",
    //         "period": "Morning",
    //         "bgColor": "#54B435"
    //     }
    // }
]
