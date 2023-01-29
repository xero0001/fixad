import styles from './layout.module.css'
import classNames from 'classnames/bind'
import NavBar from './(_components)/navBar/NavBar'

const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className={cx('container')}>{children}</main>
    </>
  )
}
