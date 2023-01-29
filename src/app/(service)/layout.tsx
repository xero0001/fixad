import styles from './layout.module.css'
import classNames from 'classnames/bind'
import Footer from './(_components)/footer/Footer'

const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx('container')}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
