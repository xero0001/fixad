'use client'

import styles from './SignUpBtnGroup.module.css'
import classNames from 'classnames/bind'
import { useSocialAuth } from '@root/src/client/hooks/useSocialAuth'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { validatePreSignupUserQuery } from '@root/src/client/queries'
import { ACCOUNT_TYPE } from '@prisma/client'

const cx = classNames.bind(styles)

const buttonList = [
  {
    name: 'naver',
    label: '네이버',
  },
  {
    name: 'google',
    label: '구글',
  },
  {
    name: 'email',
    label: '이메일',
  },
]

export default function SignUpBtnGroup() {
  const { snsLogin } = useSocialAuth()

  const result = useQuery(['test'], () =>
    validatePreSignupUserQuery({
      id: 1,
      email: 'xero0001@naver.com',
      accountType: ACCOUNT_TYPE.KAKAO,
    }),
  )

  console.log({ data: result.data })

  function signUp(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.value === 'email') {
      // 이메일 입력폼으로 가는 행위
      return
    }

    snsLogin(e.currentTarget.value as 'kakao' | 'naver' | 'google')
  }

  return (
    <div className={cx('container')}>
      <div className={cx('desc')}>
        <div className={cx('axes')} />
        <span>다른방법으로 회원가입</span>
      </div>
      <div className={cx('btn-group')}>
        {buttonList.map((button, i) => (
          <button className={cx('sign-up-btn')} value={button.name} onClick={signUp} key={i}>
            <Image src={`/assets/sns/${button.name}.png`} alt={button.name} width={24} height={24} />
          </button>
        ))}
      </div>
    </div>
  )
}
