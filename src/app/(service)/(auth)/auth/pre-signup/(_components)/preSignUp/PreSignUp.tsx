import styles from './PreSignUp.module.css'
import classNames from 'classnames/bind'
import Header from './elements/header/Header'
import KakaoBtn from './elements/kakaoBtn/KakaoBtn'
import SignUpBtnGroup from './elements/signUpBtnGroup/SignUpBtnGroup'
import { ACCOUNT_TYPE } from '@prisma/client'

const cx = classNames.bind(styles)

const buttonList: { name: ACCOUNT_TYPE }[] = [
  // {
  //   name: ACCOUNT_TYPE.NAVER,
  // },
  {
    name: ACCOUNT_TYPE.GOOGLE,
  },
  {
    name: ACCOUNT_TYPE.EMAIL,
  },
]

export default function PreSignUp() {
  return (
    <div className={cx('container')}>
      <Header />
      <KakaoBtn />
      <SignUpBtnGroup {...{ buttonList }} />
    </div>
  )
}
