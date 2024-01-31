import { LuMusic4 } from "react-icons/lu";
import { MdOutlineSportsEsports } from "react-icons/md";
import { MdOutlineDraw } from "react-icons/md";


const Offer = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-24 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-teal-400"> Our Offerings </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Our multi-level kindergarten programs cater to the age group of 2-5 years
              with a curriculum focussing children. </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div class="p-4">
              <div class="border-dashed border-2 border-teal-200 px-4 py-6 rounded-2xl space-y-4">
                <div className=''>
                  <div>
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-50 p-5 text-teal-400">
                      <MdOutlineSportsEsports className="text-5xl" />
                    </span>
                  </div>
                </div>
                <h2 class="title-font font-semibold text-3xl text-gray-900"> Spots Class</h2>
                <p class="leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, animi. </p>
                <button className='px-7 py-2 rounded-md bg-teal-400 text-white'> Details </button>
              </div>
            </div>

            <div class="p-4">
              <div class="border-dashed border-2 border-teal-200 px-4 py-6 rounded-2xl space-y-4 hover:bg-rose-400 hover:text-white">
                <div className=''>
                  <div>
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-50 p-5 text-teal-400">
                      <MdOutlineDraw className="text-5xl" />
                    </span>
                  </div>
                </div>
                <h2 class="title-font font-semibold text-3xl text-gray-900"> Drawing Class</h2>
                <p class="leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, animi. </p>
                <button className='px-7 py-2 rounded-md bg-teal-400 text-white'> Details </button>
              </div>
            </div>

            <div class="p-4">
              <div class="border-dashed border-2 border-teal-200 px-4 py-6 rounded-2xl space-y-4">
                <div className=''>
                  <div>
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-50 p-5 text-teal-400">
                      <LuMusic4 className="text-5xl" />
                    </span>
                  </div>
                </div>
                <h2 class="title-font font-semibold text-3xl text-gray-900"> Music Class</h2>
                <p class="leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, animi. </p>
                <button className='px-7 py-2 rounded-md bg-teal-400 text-white'> Details </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Offer;