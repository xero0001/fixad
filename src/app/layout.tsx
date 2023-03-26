import './globals.css'
import RootProvider from './(_components)/provider/RootProvider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <head />
      <body>
        <div className="root">
          <RootProvider>{children}</RootProvider>
        </div>
        <div id="modal-portal" className="modal-portal" />
      </body>
    </html>
  )
}
