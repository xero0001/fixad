import '../shared/styles/globals.css'
import RootProvider from './(_components)/provider/RootProvider'
import styles from './layout.module.css'
import classNames from 'classnames/bind'
import { Noto_Sans_KR } from '@next/font/google'

const cx = classNames.bind(styles)

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true} className={notoSansKr.className}>
      <head />
      <body>
        <div className={cx('root-layout')}>
          <RootProvider>{children}</RootProvider>
        </div>
      </body>
    </html>
  )
}
