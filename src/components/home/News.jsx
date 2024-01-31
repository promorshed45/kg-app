import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";


const News = () => {
    return (
        <div>
            <section className="px-20 mx-auto bg-gray-50">
                <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                    <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                        <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 "> Campus News </h1>
                        <div className="mt-8 flex gap-4 lg:mt-0">
                            <button
                                aria-label="Previous slide"
                                id="keen-slider-previous"
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
                                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                           

                            <a href="#" className="group relative block overflow-hidden">
                                <div className='relative '>
                                    <button
                                        className="absolute left-6 bottom-4 z-10 rounded-sm bg-yellow-500 p-1.5 text-white transition hover:text-rose-700">
                                        <span className="sr-only">Wishlist</span>
                                        <p>24 Jan 2024</p>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                                        alt=""
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                    />
                                </div>

                                <div className="relative border border-gray-100 bg-white p-6">

                                    <div className='flex justify-between gap-3'>
                                        <div className="flex items-center gap-2">
                                            <FaRegUser className="text-teal-500 text-xl hover:text-rose-500" />
                                            <div className='flex gap-1 items-center'>
                                                <p className="text-md text-gray-500">by</p>

                                                <p className="text-lg font-medium text-rose-500 hover:text-teal-500">Abu Jahur</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="hidden text-gray-600 sm:block">
                                                <FaRegComments className="text-teal-500 text-2xl hover:text-rose-500" />
                                            </span>
                                            <div className='flex gap-1 items-center hover:text-teal-500'>
                                                <p className="text-xl text-rose-500 hover:text-teal-500"> 155 </p>
                                                <p className="text-lg text-gray-500"> comments </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-lg font-medium text-gray-900"> How to be Learn Map Glove Easy Way for Garten </h3>
                                    <form className="mt-4">
                                        <button className="block w-full rounded bg-yellow-400 p-3 text-md font-medium transition hover:scale-105">
                                            Details
                                        </button>
                                    </form>
                                </div>
                            </a>

                            <a href="#" className="group relative block overflow-hidden">
                                <div className='relative '>
                                    <button
                                        className="absolute left-6 bottom-4 z-10 rounded-sm bg-yellow-500 p-1.5 text-white transition hover:text-rose-700">
                                        <span className="sr-only">Wishlist</span>
                                        <p>24 Jan 2024</p>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                                        alt=""
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                    />
                                </div>

                                <div className="relative border border-gray-100 bg-white p-6">

                                    <div className='flex justify-between gap-3'>
                                        <div className="flex items-center gap-2">
                                            <FaRegUser className="text-teal-500 text-xl hover:text-rose-500" />
                                            <div className='flex gap-1 items-center'>
                                                <p className="text-md text-gray-500">by</p>

                                                <p className="text-lg font-medium text-rose-500 hover:text-teal-500">Abu Jahur</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="hidden text-gray-600 sm:block">
                                                <FaRegComments className="text-teal-500 text-2xl hover:text-rose-500" />
                                            </span>
                                            <div className='flex gap-1 items-center hover:text-teal-500'>
                                                <p className="text-xl text-rose-500 hover:text-teal-500"> 155 </p>
                                                <p className="text-lg text-gray-500"> comments </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-lg font-medium text-gray-900"> How to be Learn Map Glove Easy Way for Garten </h3>
                                    <form className="mt-4">
                                        <button className="block w-full rounded bg-yellow-400 p-3 text-md font-medium transition hover:scale-105">
                                            Details
                                        </button>
                                    </form>
                                </div>
                            </a>

                            <a href="#" className="group relative block overflow-hidden">
                                <div className='relative '>
                                    <button
                                        className="absolute left-6 bottom-4 z-10 rounded-sm bg-yellow-500 p-1.5 text-white transition hover:text-rose-700">
                                        <span className="sr-only">Wishlist</span>
                                        <p>24 Jan 2024</p>
                                    </button>

                                    <img
                                        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                                        alt=""
                                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                    />
                                </div>

                                <div className="relative border border-gray-100 bg-white p-6">

                                    <div className='flex justify-between gap-3'>
                                        <div className="flex items-center gap-2">
                                            <FaRegUser className="text-teal-500 text-xl hover:text-rose-500" />
                                            <div className='flex gap-1 items-center'>
                                                <p className="text-md text-gray-500">by</p>

                                                <p className="text-lg font-medium text-rose-500 hover:text-teal-500">Abu Jahur</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="hidden text-gray-600 sm:block">
                                                <FaRegComments className="text-teal-500 text-2xl hover:text-rose-500" />
                                            </span>
                                            <div className='flex gap-1 items-center hover:text-teal-500'>
                                                <p className="text-xl text-rose-500 hover:text-teal-500"> 155 </p>
                                                <p className="text-lg text-gray-500"> comments </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-lg font-medium text-gray-900"> How to be Learn Map Glove Easy Way for Garten </h3>
                                    <form className="mt-4">
                                        <button className="block w-full rounded bg-yellow-400 p-3 text-md font-medium transition hover:scale-105">
                                            Details
                                        </button>
                                    </form>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;