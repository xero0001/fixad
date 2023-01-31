'use client'

import Pad from '../Pad'
import IntroduceArea from '../IntroduceArea'
import VisionArea from '../VisionArea'
import ServiceArea from '../ServiceArea'
import JoinArea from '../JoinArea'
import Footer from '../../../(_components)/footer/Footer'

// import ReactFullpage from '@fullpage/react-fullpage'
import ReactFullpage from '@fullpage/react-fullpage'
// import { SectionsContainer, Section } from 'react-fullpage'
import cs from 'classnames'

import classNames from 'classnames/bind'
import styles from './LandingPage.module.css'
const cx = classNames.bind(styles)

export default function LandingPage() {
  return (
    <>
      <ReactFullpage
        //fullpage options
        // licenseKey={''}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={cs('section', cx('fullpage', 's1'))}>
                <IntroduceArea />
              </div>
              <div className={cs('section', cx('fullpage', 's2'))}>
                <VisionArea />
              </div>
              <div className={cs('section', cx('fullpage', 's3'))}>
                <ServiceArea />
              </div>
              <div className={cs('section', cx('fullpage', 's4'))}>
                <JoinArea />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}
