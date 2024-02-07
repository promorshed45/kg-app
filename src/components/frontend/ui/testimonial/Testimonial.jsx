import React from 'react';
import Image from 'next/image';

import { GoPlay } from 'react-icons/go';
import Parents from "@/assets/motherteach.jpg";
import Slider from './Slider';


const Testimonial = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-1/2 flex-grow relative">
                <div className='w-full'>
                    <Image src={Parents} alt='background image' className='absolute -z-10 w-full h-full object-cover opacity-80' />
                </div>
                <section className="z-0 text-gray-700 body-font h-lvh relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondaryDeep/40 to-primaryDeep/40 opacity-80"></div>
                    <a target='_top' href="https://www.youtube.com/watch?v=NIk1-ck4c6Q">
                        <div className='w-20 h-20 flex justify-center items-center rounded-full'>
                            <GoPlay className='text-white text-7xl absolute' />
                            <div className='border-2 border-white  w-20 h-20 flex justify-center items-center rounded-full animate-ping'></div>
                        </div>
                    </a>
                </section>
            </div>

            <div className="flex  w-1/2 px-10 bg-gradient-to-r from-purple-400 to-secondaryLight ">
                <div className="flex flex-col w-full">
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl pt-10 pb-5 pl-5"> Parents Says  </h2>
                    <div className=" container mx-auto">
                        <Slider/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;


