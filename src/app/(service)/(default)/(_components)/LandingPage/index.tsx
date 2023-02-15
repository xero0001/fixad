'use client'

import Pad from '../Pad'
import IntroduceArea from '../IntroduceArea'
import VisionArea from '../VisionArea'
import ServiceArea from '../ServiceArea'
import JoinArea from '../JoinArea'
import { useEffect, useState } from 'react'
import Footer from '../../../(_components)/footer/Footer'
import { BsChevronDown } from 'react-icons/bs'

// import ReactFullpage from '@fullpage/react-fullpage'
import ReactFullpage from '@fullpage/react-fullpage'
// import { SectionsContainer, Section } from 'react-fullpage'
import cs from 'classnames'

import classNames from 'classnames/bind'
import styles from './LandingPage.module.css'
const cx = classNames.bind(styles)

const FULLPAGE_LICENSE_KEY = '0L36I-3JVBI-OHZ87-IJR3H-QNIWN'

export default function LandingPage() {
  const [activeSectionNo, setActiveSectionNo] = useState(0)

  return (
    <>
      <div className={cx('scroll-btn', { white: activeSectionNo === 1, disabled: activeSectionNo === 3 })}>
        <span>SCROLL</span>
        <BsChevronDown className={cx('scroll-icon')} />
      </div>
      <ReactFullpage
        //fullpage options
        licenseKey={FULLPAGE_LICENSE_KEY}
        onLeave={() => {}}
        scrollingSpeed={500} /* Options here */
        touchSensitivity={5}
        render={({ state, fullpageApi }) => {
          const activeSection = fullpageApi?.getActiveSection()
          // @ts-ignore
          const currentIndex = activeSection?.index()

          setActiveSectionNo(currentIndex)

          return (
            <>
              <ReactFullpage.Wrapper>
                <div className={cs('section', cx('fullpage', 's1'))}>
                  <IntroduceArea isActive={currentIndex === 0} />
                </div>
                <div className={cs('section', cx('fullpage', 's2'))}>
                  <VisionArea isActive={currentIndex === 1} />
                  <div className={cx('illust-wrapper', { active: currentIndex === 1 })}>
                    <div className={cx('illust')}>
                      <img src="/assets/illust/illust_127.svg" alt="illust_127" />
                    </div>
                  </div>
                </div>
                <div className={cs('section', cx('fullpage', 's3'))}>
                  <ServiceArea isActive={currentIndex === 2} />
                </div>
                <div className={cs('section', cx('fullpage', 's4'))}>
                  <JoinArea isActive={currentIndex === 3} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </>
  )
}
