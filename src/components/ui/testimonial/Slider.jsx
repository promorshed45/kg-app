'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

// Install the required Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => { // Pass testimonials as props
  return (
    <div className="container mx-auto">
     <Swiper
        slidesPerView={1}
        navigation={true} // Enable navigation arrows
        className="h-[450px] xl:h-[400px]"
      >
        {testimonials.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm mx-4 my-6 bg-white/30 rounded-xl shadow-lg">
              <div className="px-8 py-12 rounded-t-lg">
                <p className="relative py-1 text-lg italic text-center dark:text-slate-950">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-rose-100">
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className='px-10'>{data.comment}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-rose-100">
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-slate-950 dark:text-gray-400">
                <img src={data.photo} alt="parents photo" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover object-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                <p className="text-xl font-semibold leading">{data.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;



const testimonials = [
    {
        "comment": "Using ProductX has revolutionized the way I manage my tasks. It's incredibly intuitive and has boosted my productivity tenfold!",
        "photo": "https://i.ibb.co/CM0P0SY/260525-5119x3413-Mom-and-son-hugging.jpg",
        "name": "Sarah Johnson",
    },
    {
        "comment": "I've tried many fitness apps before, but none come close to FitnessPro. It's like having a personal trainer in your pocket!",
        "photo": "https://i.ibb.co/CM0P0SY/260525-5119x3413-Mom-and-son-hugging.jpg",
        "name": "Michael Rodriguez",
    },
    {
        "comment": "As a freelance designer, finding clients is always a challenge. Thanks to FreelanceHub, I've connected with high-quality clients from all over the world!",
        "photo": "https://i.ibb.co/CM0P0SY/260525-5119x3413-Mom-and-son-hugging.jpg",
        "name": "Morshed Alam",
    },
    {
        "comment": "As a freelance designer, finding clients is always a challenge. Thanks to FreelanceHub, I've connected with high-quality clients from all over the world!",
        "photo": "https://i.ibb.co/CM0P0SY/260525-5119x3413-Mom-and-son-hugging.jpg",
        "name": "Emily Chen",
    },
    {
        "comment": "Traveling for work can be stressful, but with Wanderlust Travel App, I can easily plan my trips and discover hidden gems wherever I go!",
        "photo": "https://i.ibb.co/CM0P0SY/260525-5119x3413-Mom-and-son-hugging.jpg",
        "name": "David Lee",
    }
];
