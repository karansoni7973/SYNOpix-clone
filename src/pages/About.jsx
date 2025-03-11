import React from 'react'
import PagesHeader from '../components/about/PagesHeader'
import IntroSection from '../components/about/IntroSection'
import MinimalArea from '../components/about/MinimalArea'
import ClientsBrands from '../components/about/ClientsBrands'
import Services from '../components/about/Services'
import CallToAction from '../components/common/CallToAction'
import Testimonials from '../components/common/Testimonials'

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