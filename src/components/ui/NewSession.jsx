'use client';
import bg1 from '@/assets/bg-1.jpg'
import curveShape from '@/assets/white-curved-line.webp'
import Image from 'next/image';
import { fadeIn } from "/variants";
import { motion, easeInOut, easeIn } from "framer-motion";

const NewSession = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <div className='w-full h-full'>
                    <Image src={bg1} alt='background image' className='absolute -z-10 w-full object-cover opacity-80' />
                </div>
                <section class="z-0 text-gray-700 body-font h-96 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-secondaryDeep to-primaryDeep opacity-80"></div>
                    <div class="absolute z-50 container px-24 py-24 mx-auto text-white">
                        <motion.div
                        variants={fadeIn('down',0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                        class="flex flex-col text-center w-full mb-10">
                            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-primaryLight"> Join Our New Session </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg pt-3">Kindedo believes that good questions drive good answers. Whether it's a query about the world around us or a challenge. </p>
                        </motion.div>
                        <motion.div
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                        className="flex justify-center">
                            <button class="block w-full rounded-xl bg-secondary px-20 py-3 text-sm font-medium text-white shadow hover:bg-secondaryDeep focus:outline-none focus:ring active:bg-primary sm:w-auto"> Apply Now </button>
                        </motion.div>
                    </div>

                    <Image src={curveShape} alt='curve-shape' className='absolute left-40 top-24 animate-bounce' />
                    <Image src={curveShape} alt='curve-shape' className='absolute right-72 bottom-20 animate-bounce' />
                </section>
            </div>
        </div>
    );
};

export default NewSession;

// 