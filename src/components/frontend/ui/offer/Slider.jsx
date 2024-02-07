'use client';
import { CiMusicNote1, CiTrophy } from "react-icons/ci";
import { MdOutlineDraw } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { } from 'swiper';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// framer motion 
import { fadeIn } from "/variants";
import { motion } from "framer-motion";


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
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[430px]"
      >
                {offers.map((data, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        >
                             <div className="p-4">
                            <div className="border-dashed border-2 border-primaryLight px-4 py-6 rounded-2xl space-y-4 transition-all duration-300 ease-in-out hover:border-none hover:bg-primary hover:text-white">
                                <div className="">
                                    <div>
                                        <p className="inline-flex md:text-6xl items-center justify-center rounded-full bg-gradientPrimary md:p-5 text-primary transition-all duration-300 ease-in-out">
                                            {icons[data.icon]}
                                        </p>
                                    </div>
                                </div>
                                <h2 className="title-font font-semibold text-3xl dark:text-secondaryDeep">{data.title}</h2>
                                <div className="h-24">
                                    <p>{data.description}</p>
                                </div>
                                <button className='px-7 py-2 rounded-md border-2 border-white bg-primary text-white hover:bg-gradientPrimary hover:text-primaryDeep'> View Details </button>
                            </div>
                        </div>
                        </motion.div>

                       
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;

const offers = [
    {
        "title": "Spots Class",
        "description": "Engage in physical activities and team sports. Stay active with options for all skill levels.",
        "icon": "spots"
    },
    {
        "title": "Music Class",
        "description": "Immerse in diverse musical genres. Discover instruments and styles, inspiring passion for music enthusiasts.",
        "icon": "music"
    },
    {
        "title": "Daycare Class",
        "description": "Ensure children's safety and growth. Nurturing environment fosters learning, play, and socialization, offering peace of mind.",
        "icon": "daycare"
    },
    {
      "title": "Drawing Class",
      "description": "Unleash creativity with various techniques. Express visually, nurturing inner artist on paper or canvas.",
      "icon": "drawing"
    },

]
