import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Slider from "./Slider";


const News = () => {
    return (
        <div>
            <section className="px-20 mx-auto bg-gray-50 dark:bg-slate-950">
                <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 dark:text-gray-300"> Campus News </h1>
                        <div className="mt-8 flex gap-4 lg:mt-0">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous"
                                className="rounded-full border border-secondaryDeep p-3 text-secondaryDeep transition hover:bg-secondaryDeep hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                aria-label="Next slide"
                                id="keen-slider-next"
                                className="rounded-full border border-secondaryDeep p-3 text-secondaryDeep transition hover:bg-secondaryDeep hover:text-white"
                            >
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
                        <Slider/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;


    