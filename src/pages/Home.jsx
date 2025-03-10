import React from 'react';
import HomeSlider from '../components/home/HomeSlider';
import HomeAbout from '../components/home/HomeAbout';
import HomePortfolio from '../components/home/HomePortfolio';
import HomeServices from '../components/home/HomeServices';
import HomeMinimalArea from '../components/home/HomeMinimalArea';
import HomeTestimonials from '../components/home/HomeTestimonials';
import HomeCallToAction from '../components/home/HomeCallToAction';

const Home = () => {
    return (
        <div>
            <HomeSlider/>
            <HomeAbout/>  
            <HomePortfolio/>
            <HomeServices/>
            <HomeMinimalArea/>
            <HomeTestimonials/>
            <HomeCallToAction/>
        </div>
    );
};

export default Home;