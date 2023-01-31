import { PATH } from '@shared/const'
import Link from 'next/link'
import styles from './NavBar.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function NavBar() {
  return (
    <header className={cx('nav-bar')}>
      <div className={cx('header')}>
        <img src="/assets/logo/logo.svg" alt="logo" />
        {/* <div className={cx('icon-wrap')}>
          <img src="/assets/icon/user_1.svg" alt="logo" />
        </div> */}
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link href={PATH.HOME}>HOME</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}
