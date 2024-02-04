import React from 'react';
import Banner from './Banner';
import Offer from './offer/Offer';
import Award from './Award';
import Program from './Program';
import AboutUs from './AboutUs';
import NewSession from './NewSession';
import Teacher from './Teacher';
import Testimonial from './testimonial/Testimonial';
import News from './News';
import NewsLetter from './NewsLetter';
import BackToTop from './BackToTop';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;