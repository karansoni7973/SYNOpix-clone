import React from 'react'
import PagesHeader from '../components/about/PagesHeader'
import IntroSection from '../components/about/IntroSection'
import MinimalArea from '../components/about/MinimalArea'
import ClientsBrands from '../components/about/ClientsBrands'
import Services from '../components/about/Services'
import CallToAction from '../components/common/CallToAction'
import Testimonials from '../components/common/Testimonials'
import Documentation from '../components/privacypolicy/Documentation'
import TermsDocumentation from '../components/terms&condition/TermsDocumentation'

const TermsCondition = () => {
  return (
    <div>
    <TermsDocumentation/>
    
    
    <CallToAction/>
    </div>
  )
}

export default TermsCondition;