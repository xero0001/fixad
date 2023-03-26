'use client'

import Pad from '../Pad'
import IntroduceArea from '../IntroduceArea'
import VisionArea from '../VisionArea'
import ServiceArea from '../ServiceArea'
import JoinArea from '../JoinArea'
import { useEffect, useState } from 'react'
import Footer from '../../../(_components)/Footer/FooterLegacy'
import { BsChevronDown } from 'react-icons/bs'

// import ReactFullpage from '@fullpage/react-fullpage'
import ReactFullpage from '@fullpage/react-fullpage'
import Hero from './Hero'
import HeaderSection from '../../../(_components)/HeaderSection'
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
      <Feature />
      <SecondaryFeature />
      <Testimonial />
      <FAQSection />
      <Process />
      <Contact />
    </>
  )
}
