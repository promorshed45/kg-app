import letter from '@/assets/letter.jpg'
import Image from 'next/image';
import { BsEnvelopeAt } from "react-icons/bs";


const NewsLetter = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <div className='w-full h-full'>
                    <Image src={letter} alt='background image' className='absolute -z-10 w-full object-cover opacity-80' />
                </div>
                <section class="z-0 text-gray-700 body-font h-96 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-950/80 to-yellow-500/80"></div>
                    <div class="absolute z-50 container px-24 py-24 mx-auto text-white">
                        <div class="flex flex-col text-center w-full mb-10">
                            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4"> Join Our Newsletter </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg pt-3"> Subscribe our newsletter to get our latest update & news.</p>
                        </div>
                        <div className="mx-auto mt-8 max-w-xl">
                            <form action="#" className="flex">
                                <div className="sm:flex-1">
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full rounded-l-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group mt-4 flex w-full items-center justify-center gap-2 rounded-r-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                                    <span className="text-sm font-medium"> Subscribe Now </span>
                                    <BsEnvelopeAt  className="text-xl" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NewsLetter;