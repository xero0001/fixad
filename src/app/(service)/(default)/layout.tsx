import Header from '../(_components)/Header'
import Footer from '../(_components)/Fooot'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
