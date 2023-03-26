import styles from './layout.module.css'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { PATH } from '@root/src/shared/const'
import Footer from '../../(_components)/Footer/FooterLegacy'

const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx('container')}>
      <main>
        <div className={cx('auth-page-layout')}>
          <h1 className={cx('logo-wrapper')}>
            <Link href={PATH.HOME}>
              <Image src="/assets/logo/logo.png" alt="teacher-cloud" width={94} height={32} />
            </Link>
          </h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
