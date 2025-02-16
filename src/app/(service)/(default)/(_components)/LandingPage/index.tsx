'use client'

import { useEffect, useState } from 'react'
import Hero from './Hero'
import Creators from './Creators'
import CEO from './CEO'
import Works from './Works'
import Feature from './Feature'
import SecondaryFeature from './SecondaryFeature'
import Contact from './Contact'
import Process from './Process'
import FAQSection from './FAQSection'
import Testimonial from './Testimonial'
// import { SectionsContainer, Section } from 'react-fullpage'

const FULLPAGE_LICENSE_KEY = '0L36I-3JVBI-OHZ87-IJR3H-QNIWN'

export default function LandingPage() {
  const [activeSectionNo, setActiveSectionNo] = useState(0)

  return (
    <>
      <Hero />
      <Creators />
      {/* <Works /> */}
      <CEO />
      {/* <Artists /> */}
      {/* <Feature /> */}
      {/* <SecondaryFeature /> */}
      {/* <Testimonial /> */}
      {/* <FAQSection /> */}
      {/* <Process /> */}
      <Contact />
    </>
  )
}
