import bg1 from '@/assets/bg-1.jpg'
import curveShape from '@/assets/white-curved-line.webp'
import Image from 'next/image';

const NewSession = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <div className='w-full h-full'>
                    <Image src={bg1} alt='background image' className='absolute -z-10 w-full object-cover opacity-80' />
                </div>
                <section class="z-0 text-gray-700 body-font h-96 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-rose-700 to-teal-700 opacity-80"></div>
                    <div class="absolute z-50 container px-24 py-24 mx-auto text-white">
                        <div class="flex flex-col text-center w-full mb-10">
                            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-teal-300"> Join Our New Session </h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg pt-3">Kindedo believes that good questions drive good answers. Whether it's a query about the world around us or a challenge. </p>
                        </div>
                        <div className="flex justify-center">
                            <button class="block w-full rounded-xl bg-rose-500 px-20 py-3 text-sm font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"> Apply Now </button>
                        </div>
                    </div>

                    <Image src={curveShape} alt='curve-shape' className='absolute left-40 top-24 animate-bounce' />
                    <Image src={curveShape} alt='curve-shape' className='absolute right-72 bottom-20 animate-bounce' />
                </section>
            </div>
        </div>
    );
};

export default NewSession;

// 