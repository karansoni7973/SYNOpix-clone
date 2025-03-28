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
            <div class="progress-wrap cursor-pointer">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
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