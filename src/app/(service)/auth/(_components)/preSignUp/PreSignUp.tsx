import styles from './PreSignUp.module.css'
import classNames from 'classnames/bind'
import Header from './elements/header/Header'
import KakaoBtn from './elements/kakaoBtn/KakaoBtn'
import SignUpBtnGroup from './elements/signUpBtnGroup/SignUpBtnGroup'

const cx = classNames.bind(styles)

export default function PreSignUp() {
  return (
    <div className={cx('container')}>
      <Header />
      <KakaoBtn />
      <SignUpBtnGroup />
    </div>
  )
}
