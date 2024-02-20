import Slider from "./Slider";


const Offer = () => {
  
  return (
    <div>
      <section class="text-gray-600 body-font dark:bg-slate-950">
        <div class="container px-24 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="md:text-5xl text-2xl font-semibold title-font mb-4 text-primary"> Our Offerings </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg"> Our multi-level kindergarten programs cater to the age group of 2-5 years
              with a curriculum focussing children. </p>
          </div>
          <div class="text-center">

            <Slider/>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Offer;




