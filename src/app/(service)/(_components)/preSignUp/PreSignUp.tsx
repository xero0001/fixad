import styles from './PreSignUp.module.css'
import classNames from 'classnames/bind'
import Header from './elements/header/Header'
import KakaoBtn from './elements/kakaoBtn/KakaoBtn'

const cx = classNames.bind(styles)

export default function PreSignUp() {
  return (
    <div className={cx('container')}>
      <Header />
      <KakaoBtn />
    </div>
  )
}
