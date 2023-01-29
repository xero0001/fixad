'use client'

import { BsFillChatFill } from 'react-icons/bs'
import styles from './KakaoBtn.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function KakaoBtn() {
  async function kakaoLogin() {
    const REST_API_KEY = 'fbebb05a70ef13b207ec45abfeebb073'
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI)

    location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
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
