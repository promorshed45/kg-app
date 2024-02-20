'use client';
import Image from "next/image";
import bannershape from "@/assets/banner-shape.webp";
import bannerphoto from "@/assets/bannerphoto.png";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "/variants";

const Banner = () => {
    return (
        <div>
            <section className="relative bg-gradient-to-r from-teal-950 to-rose-950">
                <div className="inset-0 to-transparent bg-gradient-to-r"></div>
                <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="z-10 w-1/2 text-left ltr:sm:text-left rtl:sm:text-right">
                        <motion.h1
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.6 }}
                            className="bg-gradient-to-r from-primary via-orange-500  bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">Best Children’s <strong className="block font-extrabold text-secondary">Education</strong></motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.8 }}
                            className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-100">
                            "Enriching young minds through dynamic, personalized learning, fostering curiosity, creativity, and a lifelong love for education, ensuring holistic development."
                        </motion.p>

                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.8 }}
                            className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" className="block w-full rounded bg-secondary hover:bg-secondary-foreground px-12 py-3 text-sm font-medium text-white shadow  sm:w-auto">Admission Open 2024</a>
                            <a href="#" className="block w-full  rounded  px-12 py-3 text-sm font-medium text-white shadow shadow-slate-100 hover:shadow-none hover:bg-secondary-foreground  sm:w-auto">Learn More</a>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeIn('left', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}
                        className="w-1/2 flex mx-auto relative">
                        <div className="mask mask-hexagon-2" >
                            <Image src={bannerphoto} alt="Banner Photo" />
                        </div>
                        {/* <Image className="absolute z-0 top-10 -left-7 animate-bounce" src={shape1} alt="Banner Shape" />
                        <Image className="absolute z-0 top-10 right-0" src={shape2} alt="Banner Shape" />
                        <Image className="absolute z-0 bottom-24 left-0" src={shape3} alt="Banner Shape" />
                        <Image className="absolute z-0 bottom-10 right-0 animate-pulse" src={shape4} alt="Banner Shape" /> */}
                    </motion.div>
                </div>
                <Image className="absolute opacity-25 z-0 bottom-0 left-0" src={bannershape} alt="Banner Shape" />
            </section>

        </div>
    );
};

export default Banner;
