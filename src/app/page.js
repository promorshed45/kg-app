import AboutUs from '@/components/frontend/ui/AboutUs';
import Award from '@/components/frontend/ui/Award';
import BackToTop from '@/components/frontend/ui/BackToTop';
import Banner from '@/components/frontend/ui/Banner';
import NewSession from '@/components/frontend/ui/NewSession';
import News from '@/components/frontend/ui/News/News';
import NewsLetter from '@/components/frontend/ui/NewsLetter';
import Program from '@/components/frontend/ui/Program/Program';
import Teacher from '@/components/frontend/ui/Teacher/Teacher';
import Offer from '@/components/frontend/ui/offer/Offer';
import Testimonial from '@/components/frontend/ui/testimonial/Testimonial';

const page = () => {
  return (
    <>
            <Banner/>
            <Offer/>
            <Award/>
            <Program/>
            <AboutUs/>
            <NewSession/>
            <Teacher/>
            <Testimonial/>
            <News/>
            <NewsLetter/>
            <BackToTop/>
    </>
  );
};

export default page;