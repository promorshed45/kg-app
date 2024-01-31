import Image from 'next/image';
import React from 'react';
import program1 from '@/assets/program-1.webp'
import program2 from '@/assets/program-2.webp'
import program3 from '@/assets/program-3.webp'
import Link from 'next/link';

const Program = () => {
    return (
        <div>
            <section class="text-gray-700 body-font bg-gradient-to-r from-rose-50  to-teal-50">
                <div class="container px-24 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-10">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-teal-400"> Our Programs </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Kindedo opened its doors in 1984 with a unique vision to provide its students
                            with a globally focused study of arts. </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <Link href="#" className="group relative block overflow-hidden rounded-xl">
                            <Image
                                src={program3}
                                alt="Program-1"
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                            <div className="relative border border-gray-100 bg-white p-4">
                                <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-semibold md:text-4xl"> Play Group </h1>
                                    <p className="mt-2 md:text-lg/relaxed"> We will magical transform the School Sports Centre into a game field. </p>
                                    <div>
                                        <div className="mx-auto  bg-green-400 rounded-xl md:my-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 divide-dashed sm:divide-x sm:divide-gray-100 text-white">
                                                <div className="text-center">
                                                    <p className="text-4xl font-semibold  md:text-xl"> 3-4 Yrs </p>
                                                    <p className="text-lg font-medium"> age </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 5 Days </p>
                                                    <p className="text-md font-medium"> weekly </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 3.30 Hrs </p>
                                                    <p className="text-md font-medium"> period </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form className="mt-4">
                                    <button
                                        className="w-full rounded bg-teal-400 p-3 text-md font-medium transition hover:animate-pulse">
                                        View More
                                    </button>
                                </form>
                            </div>
                        </Link>

                        <Link href="#" className="group relative block overflow-hidden rounded-xl">
                            <Image
                                src={program1}
                                alt="Program-1"
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                            <div className="relative border border-gray-100 bg-white p-4">
                                <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-semibold md:text-4xl"> Play Group </h1>
                                    <p className="mt-2 md:text-lg/relaxed"> We will magical transform the School Sports Centre into a game field. </p>
                                    <div>
                                        <div className="mx-auto  bg-purple-400 rounded-xl md:my-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 divide-dashed sm:divide-x sm:divide-gray-100 text-white">
                                                <div className="text-center">
                                                    <p className="text-4xl font-semibold  md:text-xl"> 3-4 Yrs </p>
                                                    <p className="text-lg font-medium"> age </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 5 Days </p>
                                                    <p className="text-md font-medium"> weekly </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 3.30 Hrs </p>
                                                    <p className="text-md font-medium"> period </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form className="mt-4">
                                    <button
                                        className="w-full rounded bg-teal-400 p-3 text-md font-medium transition hover:animate-pulse">
                                        View More
                                    </button>
                                </form>
                            </div>
                        </Link>

                        <Link href="#" className="group relative block overflow-hidden rounded-xl">
                            <Image
                                src={program2}
                                alt="Program-1"
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
                            <div className="relative border border-gray-100 bg-white p-4">
                                <div className="text-left ltr:sm:text-left rtl:sm:text-right">
                                    <h1 className="text-3xl font-semibold md:text-4xl"> Play Group </h1>
                                    <p className="mt-2 md:text-lg/relaxed"> We will magical transform the School Sports Centre into a game field. </p>
                                    <div>
                                        <div className="mx-auto  bg-blue-400 rounded-xl md:my-3">
                                            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 divide-dashed sm:divide-x sm:divide-gray-100 text-white">
                                                <div className="text-center">
                                                    <p className="text-4xl font-semibold  md:text-xl"> 3-4 Yrs </p>
                                                    <p className="text-lg font-medium"> age </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 5 Days </p>
                                                    <p className="text-md font-medium"> weekly </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="text-lg font-semibold  md:text-xl"> 3.30 Hrs </p>
                                                    <p className="text-md font-medium"> period </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form className="mt-4">
                                    <button
                                        className="w-full rounded bg-teal-400 p-3 text-md font-medium transition hover:animate-pulse">
                                        View More
                                    </button>
                                </form>
                            </div>
                        </Link>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;