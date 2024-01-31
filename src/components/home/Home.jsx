import React from 'react';
import Banner from './Banner';
import Offer from './offer/Offer';
import Award from './Award';
import Program from './Program';
import AboutUs from './AboutUs';
import NewSession from './NewSession';
import Teacher from './Teacher';
import Testimonial from './Testimonial';
import News from './News';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Offer/>
            <Program/>
            <Award/>
            <AboutUs/>
            <NewSession/>
            <Teacher/>
            <Testimonial/>
            <News/>
            <NewsLetter/>
        </div>
    );
};

export default Home;