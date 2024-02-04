'use client';

import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { fadeIn } from "/variants";
import { motion, easeInOut, easeIn } from "framer-motion";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Teacher = () => {
    return (
        <div>
            <section class="text-gray-800 body-font dark:bg-slate-950 dark:text-gray-400">
                <div class="container px-24 py-24 mx-auto">
                    <motion.div
                    variants={fadeIn('down',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.4}}
                     class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 "> Our Best Teachers </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> With the help of teachers and the environment as the third teacher, students
                            have opportunities to confidently take risks. </p>
                    </motion.div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
                        

                        {Teachers.map((data, index)=>(
                            <motion.div key={index}
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: true, amount: 0.4}}
                        class="space-y-4 group">
                            <div class="relative">
                                <Image src={data.photo} width={550} height={500} alt="Teacher Photo" class="object-cover h-52 md:h-72 mx-auto bg-center rounded-lg dark:bg-gray-500 hover:scale-105" />
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70 opacity-0 group-hover:opacity-100 rounded-lg"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div class="flex absolute bottom-0 animate-pulse rounded-b-lg bg-secondary h-10 items-center w-full justify-center">
                                       
                                    </div>
                                    <div className="absolute bottom-2">
                                    <ul className="flex gap-6">
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-primary">
                                                    <span className="sr-only"> {data.socialLink.facebook} </span>
                                                    <FaFacebook className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-primary">
                                                    <span className="sr-only"> {data.socialLink.linkedin} </span>
                                                    <FaLinkedin className="text-2xl" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-primary">
                                                    <span className="sr-only"> {data.socialLink.youtube} </span>
                                                    <IoLogoYoutube className="text-2xl" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <h4 class="text-xl font-semibold"> {data.name} </h4>
                                <p class="text-sm dark:text-gray-400"> {data.jobTitle} </p>
                                <div class="flex mt-2 space-x-2">
                                </div>
                            </div>
                        </motion.div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teacher;

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
      }
  ]
