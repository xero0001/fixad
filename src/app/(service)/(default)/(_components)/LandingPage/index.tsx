'use client'

import { useState } from 'react'
import Hero from './Hero'
import CEO from './CEO'
import Contact from './Contact'
import Services from './Services'
// import { SectionsContainer, Section } from 'react-fullpage'

export default function LandingPage({ lang = 'ko' }: { lang: string }) {
  const [activeSectionNo, setActiveSectionNo] = useState(0)

  return (
    <>
      <Hero lang={lang} />
      <Services lang={lang} />
      {/* <Works /> */}
      <CEO lang={lang} />
      {/* <Artists /> */}
      {/* <Feature /> */}
      {/* <SecondaryFeature /> */}
      {/* <Testimonial /> */}
      {/* <FAQSection /> */}
      {/* <Process /> */}
      <Contact lang={lang} />
    </>
  )
}
