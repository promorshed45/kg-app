'use client';
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { } from 'swiper';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import framer motion
import { fadeIn } from "/variants";
import { motion } from "framer-motion";

import Image from "next/image";
import { useState } from "react";

// use react icons
import { CiMusicNote1, CiTrophy } from "react-icons/ci";
import { MdOutlineDraw } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Slider = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    const icons = {
        "music": <CiMusicNote1 />,
        "spots": <CiTrophy />,
        "drawing": <MdOutlineDraw />,
        "daycare": <BsSunrise />

    };

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-[380px]"
            >
                {Teachers.map((data, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            variants={fadeIn('left', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.1 }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative">
                                <Image src={data.photo} width={550} height={500} alt="Teacher Photo" className="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500" />
                                {hoverIndex === index && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-100 rounded-lg"></div>
                                        <div className="absolute w-full bottom-0 h-10 animate-pulse flex items-center rounded-b-lg bg-secondary justify-center group-hover:opacity-100">
                                        </div>
                                        <div className='absolute bottom-2 w-full flex justify-center'>
                                            <ul className="flex gap-6">
                                                <li>
                                                    <a
                                                        href={data.socialLink.facebook}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-white transition hover:text-primary"
                                                    >
                                                        <span className="sr-only">Facebook</span>
                                                        <FaFacebook className="text-2xl" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={data.socialLink.linkedin}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-white transition hover:text-primary"
                                                    >
                                                        <span className="sr-only">LinkedIn</span>
                                                        <FaLinkedin className="text-2xl" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={data.socialLink.youtube}
                                                        rel="noreferrer"
                                                        target="_blank"
                                                        className="text-white transition hover:text-primary"
                                                    >
                                                        <span className="sr-only">Youtube</span>
                                                        <IoLogoYoutube className="text-2xl" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </>
                                )}
                            </div>
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold">{data.name}</h4>
                                <p className="text-sm dark:text-gray-400">{data.jobTitle}</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};


export default Slider;

const Teachers = [
    {
        "photo": "/teachers/teacher1.webp",
        "name": "John Doe",
        "jobTitle": "Software Engineer",
        "socialLink": {
            "linkedin": "https://www.linkedin.com/in/johndoe",
            "facebook": "https://www.facebook.com/johndoe",
            "youtube": "https://www.youtube.com/user/johndoe"
        },
        "info": {
            "email": "john@example.com",
            "phone": "+1234567890",
            "location": "San Francisco, CA",
            "website": "https://www.johndoe.com",
            "about": "Experienced software engineer passionate about building scalable applications.",
            "skills": ["JavaScript", "React", "Node.js", "Python"]
        }
    },
    {
        "photo": "/teachers/teacher2.webp",
        "name": "Jane Smith",
        "jobTitle": "Graphic Designer",
        "socialLink": {
            "linkedin": "https://www.linkedin.com/in/janesmith",
            "facebook": "https://www.facebook.com/janesmith",
            "youtube": "https://www.youtube.com/user/janesmith"
        },
        "info": {
            "email": "jane@example.com",
            "phone": "+1234567890",
            "location": "New York, NY",
            "website": "https://www.janesmith.com",
            "about": "Creative graphic designer with a keen eye for detail and typography.",
            "skills": ["Adobe Photoshop", "Illustrator", "InDesign", "Sketch"]
        }
    },
    {
        "photo": "/teachers/teacher3.webp",
        "name": "Alex Jones",
        "jobTitle": "Marketing Manager",
        "socialLink": {
            "linkedin": "https://www.linkedin.com/in/alexjones",
            "facebook": "https://www.facebook.com/alexjones",
            "youtube": "https://www.youtube.com/user/alexjones"
        },
        "info": {
            "email": "alex@example.com",
            "phone": "+1234567890",
            "location": "Los Angeles, CA",
            "website": "https://www.alexjones.com",
            "about": "Results-driven marketing manager with expertise in digital campaigns and analytics.",
            "skills": ["Digital Marketing", "SEO", "Social Media Marketing", "Google Analytics"]
        }
    },
    {
        "photo": "/teachers/teacher4.webp",
        "name": "Alex Jones",
        "jobTitle": "Marketing Manager",
        "socialLink": {
            "linkedin": "https://www.linkedin.com/in/alexjones",
            "facebook": "https://www.facebook.com/alexjones",
            "youtube": "https://www.youtube.com/user/alexjones"
        },
        "info": {
            "email": "alex@example.com",
            "phone": "+1234567890",
            "location": "Los Angeles, CA",
            "website": "https://www.alexjones.com",
            "about": "Results-driven marketing manager with expertise in digital campaigns and analytics.",
            "skills": ["Digital Marketing", "SEO", "Social Media Marketing", "Google Analytics"]
        }
    },
    {
        "photo": "/teachers/teacher2.webp",
        "name": "Jane Smith",
        "jobTitle": "Graphic Designer",
        "socialLink": {
            "linkedin": "https://www.linkedin.com/in/janesmith",
            "facebook": "https://www.facebook.com/janesmith",
            "youtube": "https://www.youtube.com/user/janesmith"
        },
        "info": {
            "email": "jane@example.com",
            "phone": "+1234567890",
            "location": "New York, NY",
            "website": "https://www.janesmith.com",
            "about": "Creative graphic designer with a keen eye for detail and typography.",
            "skills": ["Adobe Photoshop", "Illustrator", "InDesign", "Sketch"]
        }
    }
]