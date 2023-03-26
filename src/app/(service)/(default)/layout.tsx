import Header from '../(_components)/Header'
import Footer from '../(_components)/Footer'
// import './globals.css'
// import styles from './layout.module.css'
// import classNames from 'classnames/bind'
// import Footer from '../(_components)/footer/Footer'

// const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
