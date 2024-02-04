import Image from "next/image";
import { CiMusicNote1, CiTrophy } from "react-icons/ci";
import { MdOutlineDraw } from "react-icons/md";
import { BsSunrise } from "react-icons/bs";


const Offer = () => {
  const icons = {
    "music": <CiMusicNote1 />,
    "spots": <CiTrophy />,
    "drawing": <MdOutlineDraw />,
    "daycare": <BsSunrise />

  };
  return (
    <div>
      <section class="text-gray-600 body-font dark:bg-slate-950">
        <div class="container px-24 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-primaryLight"> Our Offerings </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Our multi-level kindergarten programs cater to the age group of 2-5 years
              with a curriculum focussing children. </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            {offers.map((data, index) => (
              <div key={index} className="p-4">
                <div className="border-dashed border-2 border-primaryLight px-4 py-6 rounded-2xl space-y-4 transition-all duration-300 ease-in-out hover:border-none hover:bg-primary hover:text-white">
                  <div className="">
                    <div>
                      <p className="inline-flex md:text-6xl items-center justify-center rounded-full bg-gradientPrimary md:p-5 text-primary transition-all duration-300 ease-in-out">
                        {icons[data.icon]}
                      </p>
                    </div>
                  </div>
                  <h2 className="title-font font-semibold text-3xl dark:text-secondaryDeep">{data.title}</h2>
                  <div className="h-24">
                    <p>{data.description}</p>
                  </div>
                  <button className='px-7 py-2 rounded-md border-2 border-white bg-primary text-white hover:bg-gradientPrimary hover:text-primaryDeep'> View Details </button>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Offer;

const offers = [
  {
    "title": "Spots Class",
    "description": "Engage in physical activities and team sports. Stay active with options for all skill levels.",
    "icon": "spots"
  },
  {
    "title": "Music Class",
    "description": "Immerse in diverse musical genres. Discover instruments and styles, inspiring passion for music enthusiasts.",
    "icon": "music"
  },
  {
    "title": "Daycare Class",
    "description": "Ensure children's safety and growth. Nurturing environment fosters learning, play, and socialization, offering peace of mind.",
    "icon": "daycare"
  },
  // {
  //   "title": "Drawing Class",
  //   "description": "Unleash creativity with various techniques. Express visually, nurturing inner artist on paper or canvas.",
  //   "icon": "drawing"
  // },

]


