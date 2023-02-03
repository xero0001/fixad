import '../client/styles/globals.css'
import RootProvider from './(_components)/provider/RootProvider'
// import { Noto_Sans_KR } from '@next/font/google'
// import localFont from '@next/font/local'
import styles from './layout.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

// const notoSansKr = Noto_Sans_KR({
//   weight: ['100', '300', '400', '500', '700', '900'],
//   variable: '--font-noto-sans-kr',
//   subsets: ['latin'],
// })

// const pretendard = localFont({
//   src: '../../public/fonts/pretendard/PretendardVariable.woff2',
//   variable: '--pretendard',
// })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" suppressHydrationWarning={true}>
      <head />
      <body>
        <div className={cx('root-layout')}>
          <RootProvider>{children}</RootProvider>
        </div>
        <div id="modal-portal" className={cx('modal-portal')} />
      </body>
    </html>
  )
}
