import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <head />
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  )
}
