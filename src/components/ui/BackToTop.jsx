'use client';
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from 'react-scroll';


export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 400) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    
      const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      return (
        <div>
          {isVisible && (
            <button 
            className={`fixed bg-secondary hover:bg-secondaryDeep w-12 h-12 right-5 bottom-5 rounded-full cursor-pointer flex justify-center items-center text-white border-2 border-white ${isVisible ? '' : 'hidden'}`}
            onClick={scrollToTop} >
              <IoIosArrowUp className='text-xl' />
            </button>
          )}
        </div>
      );
    };


