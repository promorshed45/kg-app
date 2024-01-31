import Image from "next/image";
import bannershape from "../../assets/banner-shape.webp";
import bannerImg from "../../assets/hero-3.webp";
import shape1 from "../../assets/curved-1.webp";
import shape2 from "../../assets/shape-2.webp";
import shape3 from "../../assets/shape-3.webp";
import shape4 from "../../assets/shape-4.webp";


const Banner = () => {
    return (
        <div>
            <section className="relative bg-gradient-to-r from-rose-50 to-teal-50">
                <div className="inset-0 to-transparent bg-gradient-to-r"></div>
                <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="z-10 w-1/2 text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="bg-gradient-to-r from-rose-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-7xl">Best Children’s <strong className="block font-extrabold text-teal-500">Education</strong></h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            "Enriching young minds through dynamic, personalized learning, fostering curiosity, creativity, and a lifelong love for education, ensuring holistic development."
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">Admission Open 2024</a>
                            <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">Learn More</a>
                        </div>
                    </div>

                    <div className="w-1/2 p-10 flex mx-auto relative">
                        <div className="mask mask-hexagon-2" style={{ backgroundImage: `url('https://i.ibb.co/9nRKZzC/hero-3-mask-8934d809.png')` }}>
                            <Image src={bannerImg} alt="Banner Photo" />
                        </div>
                        <Image className="absolute z-0 top-10 -left-7 animate-bounce" src={shape1} alt="Banner Shape" />
                        <Image className="absolute z-0 top-10 right-0" src={shape2} alt="Banner Shape" />
                        <Image className="absolute z-0 bottom-24 left-0" src={shape3} alt="Banner Shape" />
                        <Image className="absolute z-0 bottom-10 right-0 animate-pulse" src={shape4} alt="Banner Shape" />
                    </div>
                </div>
                <Image className="absolute opacity-25 z-0 bottom-0 left-0" src={bannershape} alt="Banner Shape" />
            </section>

        </div>
    );
};

export default Banner;
