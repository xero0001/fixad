import { PATH } from '@shared/const'
import Link from 'next/link'
import styles from './NavBar.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function NavBar() {
  return (
    <header className={cx('nav-bar')}>
      <nav>
        <ul>
          <li>
            <Link href={PATH.HOME}>가나다</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
