import styles from './layout.module.css'
import classNames from 'classnames/bind'
import Image from 'next/image'

const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx('auth-page-layout')}>
      <h1 className={cx('logo-wrapper')}>
        <Image src="/assets/logo/logo.png" alt="teacher-cloud" width={94} height={32} />
      </h1>
      {children}
    </div>
  )
}
