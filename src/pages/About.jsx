import React from 'react'
import PagesHeader from '../components/about/PagesHeader'
import IntroSection from '../components/about/IntroSection'
import Testimonials from '../components/about/Testimonials'
import MinimalArea from '../components/about/MinimalArea'
import ClientsBrands from '../components/about/ClientsBrands'
import CallToAction from '../components/about/CallToAction'
import Services from '../components/about/Services'

const About = () => {
  return (
    <div>
    <PagesHeader/>
    <IntroSection/>
    <Services/>
    <Testimonials/>
    <MinimalArea/>
    <ClientsBrands/>
    <CallToAction/>
    </div>
  )
}

export default About