'use client'

import styles from './SignUpBtnGroup.module.css'
import classNames from 'classnames/bind'
import { useSocialAuth } from '@root/src/client/hooks/useSocialAuth'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { validatePreSignupUserQuery } from '@root/src/client/queries'
import { ACCOUNT_TYPE } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { PATH } from '@root/src/shared/const'

const cx = classNames.bind(styles)

const buttonList: { name: ACCOUNT_TYPE }[] = [
  {
    name: ACCOUNT_TYPE.NAVER,
  },
  {
    name: ACCOUNT_TYPE.GOOGLE,
  },
  {
    name: ACCOUNT_TYPE.EMAIL,
  },
]

export default function SignUpBtnGroup({ buttonList }: { buttonList: { name: ACCOUNT_TYPE }[] }) {
  const { snsLogin } = useSocialAuth()
  const router = useRouter()

  function signUp(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.value === ACCOUNT_TYPE.EMAIL) {
      router.push(PATH.AUTH_PRESIGNUP_EMAIL_SIGNUP)
      return
    }

    snsLogin(e.currentTarget.value as ACCOUNT_TYPE)
  }

  return (
    <div className={cx('container')}>
      <div className={cx('desc')}>
        <div className={cx('axes')} />
        <span>다른방법으로 회원가입</span>
      </div>
      <div className={cx('btn-group')}>
        {buttonList?.map((button, i) => (
          <button className={cx('sign-up-btn')} value={button.name} onClick={signUp} key={i}>
            <Image src={`/assets/sns/${button.name}.png`} alt={button.name} width={24} height={24} />
          </button>
        ))}
      </div>
    </div>
  )
}
