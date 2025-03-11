import React from 'react'
import CaseHeader from '../components/case-study/CaseHeader'
import { StartWork } from '../components/case-study/StartWork'
import CallToAction from '../components/common/CallToAction'

const CaseStudy = () => {
  return (
    <div>
      <CaseHeader/>
      <StartWork/>
      <CallToAction/>
    </div>
  )
}

export default CaseStudy