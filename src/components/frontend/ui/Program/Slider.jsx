'use client';
import { CiMusicNote1, CiTrophy } from "react-icons/ci";
import { MdOutlineDraw } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { } from 'swiper';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { fadeIn } from "/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
    const icons = {
        "music": <CiMusicNote1 />,
        "spots": <CiTrophy />,
        "drawing": <MdOutlineDraw />,
        "daycare": <BsSunrise />

    };

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                pagination={{
                    clickable: true,

                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[670px]"
            >
                {Programs.map((data, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            variants={fadeIn('left', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.1 }}>
                            <Link href="#" className="group relative block overflow-hidden rounded-xl">
                                <Image
                                    src={data.photo} width={750} height={700} alt="Student Photo"
                                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60" />
                                <div className="relative border border-gray-100 bg-white p-4">
                                    <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                                        <h1 className="text-3xl font-semibold md:text-3xl"> {data.title} </h1>
                                        <p className="mt-2 md:text-lg/relaxed h-20"> {data.description} </p>
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
                                            className="w-full rounded bg-primary p-3 text-md font-medium transition hover:animate-pulse text-white">
                                            View More
                                        </button>
                                    </form>
                                </div>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;

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
    {
        "title": "KG Two",
        "description": "Developing literacy and numeracy skills. Encouraging critical thinking and problem-solving.",
        "photo": "/programs/kg2.jpg",
        "info": {
            "age": "5-6",
            "week": "5",
            "period": "Morning",
            "bgColor": "#BC7AF9"
        }
    },
    {
        "title": "KG Three",
        "description": "Advancing academic skills with hands-on learning. Preparing for elementary school.",
        "photo": "/programs/kg3.jpg",
        "info": {
            "age": "6-7",
            "week": "5",
            "period": "Morning",
            "bgColor": "#FF6464"
        }
    },
    {
        "title": "KG Four",
        "description": "Enhancing comprehension and communication. Building confidence for future learning.",
        "photo": "/programs/kg4.jpg",
        "info": {
            "age": "7-8",
            "week": "5",
            "period": "Morning",
            "bgColor": "#9400D3"
        }
    },
    {
        "title": "KG Five",
        "description": "Final preparation for primary education. Strengthening academic foundations.",
        "photo": "/programs/kg5.jpg",
        "info": {
            "age": "8-9",
            "week": "5",
            "period": "Morning",
            "bgColor": "#54B435"
        }
    }
]
