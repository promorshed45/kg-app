'use client';
import Slider from "./Slider";
import { fadeIn } from "/variants";
import { motion } from "framer-motion";

const Program = () => {
    return (
        <div>
            <section class="text-gray-700 body-font bg-gradient-to-r from-gradientSecondary  to-gradientPrimary">
                <div class="px-24 py-24 mx-auto">
                    <motion.div
                        variants={fadeIn('down', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.1 }}
                        class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-primaryLight"> Our Programs </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Kindedo opened its doors in 1984 with a unique vision to provide its students
                            with a globally focused study of arts. </p>
                    </motion.div>

                    <div class="text-center">

                        <Slider/>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;


