import { Mobile, Pc } from '@app/(_components)/mediaQuery'

import classNames from 'classnames/bind'
import styles from './VisionArea.module.css'
const cx = classNames.bind(styles)

export default function VisionArea() {
  return (
    <div className={cx('container')}>
      <div className={cx('content_wrap')}>
        <span>선생님의 최고 메이트가</span>
        <span>되고자 합니다.</span>

        <p>
          교사는 아이들과의 시간 외에 많은 업무를 합니다. <br />
          그 시간을 1초라도 줄일 수 있도록 아이들과의 <br />
          <Pc>시간을 소중히 여기는 선생님의 메이트가 되고자 합니다.</Pc>
          <Mobile>
            시간을 소중히 여기는 선생님의 메이트가
            <br />
            되고자 합니다.
          </Mobile>
        </p>

        <div className={cx('illust')}>
          <img src="/assets/illust/illust_127.svg" alt="illust_127" />
        </div>
      </div>
    </div>
  )
}
