import { PATH } from '@root/src/shared/const'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './JoinArea.module.css'
const cx = classNames.bind(styles)

export default function JoinArea({ isActive }) {
  return (
    <div className={cx('container')}>
      <div className={cx('wrap', { active: isActive })}>
        <div className={cx('content_wrap')}>
          <div className={cx('text_wrap')}>
            <div className={cx('title')}>신학기 전에</div>
            <div className={cx('title')}>미리 만나요!</div>
            <div className={cx('date')}>2023.02.16</div>
            <div className={cx('coming')}>COMING SOON</div>
          </div>
          <img className={cx('illust')} src="/assets/illust/illust_130.svg" alt="illust_130" />
        </div>
        <Link href={PATH.AUTH_PRESIGNUP} className={cx('join_button')}>
          회원 가입하기
        </Link>
      </div>
    </div>
  )
}
