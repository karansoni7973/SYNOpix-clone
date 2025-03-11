import React from 'react';
import HomeSlider from '../components/home/HomeSlider';
import HomeAbout from '../components/home/HomeAbout';
import HomePortfolio from '../components/home/HomePortfolio';
import HomeMinimalArea from '../components/home/HomeMinimalArea';
import CallToAction from '../components/common/CallToAction';
import Service from '../components/common/Service';
import Testimonials from '../components/common/Testimonials';

const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <HomeAbout/>  
            <HomePortfolio/>
             <Service/>
            <HomeMinimalArea/>
            <Testimonials/>
            <CallToAction/>
        </div>
    );
};

export default Home;