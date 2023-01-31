'use client'

import { Mobile, Pc } from '@app/(_components)/mediaQuery'

import classNames from 'classnames/bind'
import styles from './IntroduceArea.module.css'
const cx = classNames.bind(styles)

export default function IntroduceArea({ isActive }) {
  return (
    <div className={cx('container')}>
      <div className={cx('content_wrap', { active: isActive })}>
        <h1 className={cx('title')}>
          <Pc>어린이집, 유치원을 위한 친절한 업무 메이트!</Pc>
          <Mobile>
            어린이집, 유치원을 위한
            <br />
            친절한 업무 메이트!
          </Mobile>
        </h1>
        <h2 className={cx('subtitle')}>
          <Pc>선생님이 직접 만든 유아교육 정보 플랫폼</Pc>
          <Mobile>
            선생님이 직접 만든
            <br />
            유아교육 정보 플랫폼
          </Mobile>
        </h2>

        <div className={cx('illust_wrap', 'images')}>
          <div className={cx('illust_group_1')}>
            <img src="/assets/illust/illust_116.svg" alt="illust_116" className={cx('image_01')} />
            <img src="/assets/illust/illust_117.svg" alt="illust_117" className={cx('image_02')} />
            <img src="/assets/illust/illust_118.svg" alt="illust_118" className={cx('image_03')} />
          </div>
          <div className={cx('illust_group_2')}>
            <img src="/assets/illust/illust_119.svg" alt="illust_119" className={cx('image_04')} />
            <img src="/assets/illust/illust_122.svg" alt="illust_122" className={cx('image_05')} />
            <img src="/assets/illust/illust_123.svg" alt="illust_123" className={cx('image_06')} />
          </div>
        </div>

        <p className={cx('description')}>
          <Pc>교사가 경험한, 교사가 원하는 정보. 티처클라우드는 알고 있으니까!</Pc>
          <Mobile>
            교사가 경험한, 교사가 원하는 정보.
            <br />
            티처클라우드는 알고 있으니까!
          </Mobile>
        </p>
      </div>
    </div>
  )
}
