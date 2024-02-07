'use client';
import { fadeIn } from "/variants";
import { motion, easeInOut, easeIn } from "framer-motion";

import Slider from "./Slider";

const Teacher = () => {
    return (
        <div>
            <section class="text-gray-800 body-font dark:bg-slate-950 dark:text-gray-400">
                <div class="px-24 py-24 mx-auto">
                    <motion.div
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: true, amount: 0.4}}
                     class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 "> Our Best Teachers </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> With the help of teachers and the environment as the third teacher, students
                            have opportunities to confidently take risks. </p>
                    </motion.div>
                    <div class="text-center">
                        
                      <Slider/>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teacher;


