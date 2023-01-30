'use client'

import { BsFillChatFill } from 'react-icons/bs'
import styles from './KakaoBtn.module.css'
import classNames from 'classnames/bind'
import { useSocialAuth } from '@root/src/client/hooks/useSocialAuth'
import { ACCOUNT_TYPE } from '@prisma/client'

const cx = classNames.bind(styles)

export default function KakaoBtn() {
  const { snsLogin } = useSocialAuth()
  function kakaoLogin() {
    snsLogin(ACCOUNT_TYPE.KAKAO)
  }

  return (
    <button className={cx('kakao-sign-up-btn')} onClick={kakaoLogin}>
      <div className={cx('content')}>
        <BsFillChatFill className={cx('icon')} />
        <span className={cx('label')}>카카오로 시작하기</span>
      </div>
    </button>
  )
}
