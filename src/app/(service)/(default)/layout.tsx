// import './globals.css'
// import styles from './layout.module.css'
// import classNames from 'classnames/bind'
// import Footer from '../(_components)/footer/Footer'
// import NavBar from '../(_components)/navBar/NavBar'

// const cx = classNames.bind(styles)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      {/* <NavBar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
