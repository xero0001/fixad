'use client'

import { useEffect, useState } from 'react'
import { ERR_MSG, PATH, REG_EXP } from '@root/src/shared/const'
import { useSearchParams } from 'next/navigation'

import styles from './UserInfoUpdate.module.css'
import classNames from 'classnames/bind'
import { useMutation, useQuery } from '@tanstack/react-query'
import { finishSignupPreRegisteredMutation, validatePreSignupUserQuery } from '@root/src/client/queries'
import { ACCOUNT_TYPE } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import SignUpBtnGroup from '../../../(_components)/preSignUp/elements/signUpBtnGroup/SignUpBtnGroup'
const cx = classNames.bind(styles)

const allButtonList: { name: ACCOUNT_TYPE }[] = [
  {
    name: ACCOUNT_TYPE.NAVER,
  },
  {
    name: ACCOUNT_TYPE.GOOGLE,
  },
  {
    name: ACCOUNT_TYPE.KAKAO,
  },
  {
    name: ACCOUNT_TYPE.EMAIL,
  },
]

export default function UserInfoUpdate() {
  const searchParams = useSearchParams()

  // 쿼리스트링 파싱
  const id = searchParams.get('id')
  const email = searchParams.get('email')
  const accountType = searchParams.get('accountType')

  const buttonList = allButtonList.filter(button => button.name !== accountType)

  const { data, isLoading, isError } = useQuery(['validatePreSignUpUserQuery'], () =>
    validatePreSignupUserQuery({
      id: id ? Number(id) : undefined,
      email: email || undefined,
      accountType: (accountType as ACCOUNT_TYPE) || undefined,
    }),
  )

  const { mutate } = useMutation(finishSignupPreRegisteredMutation, {
    onSuccess: () => {
      setIsComplete(true)
    },
  })

  async function handleSubmit() {
    await mutate({
      email: email,
      id: Number(id),
      name: inputValue.NAME,
      tel: inputValue.TEL,
    })
  }

  useEffect(() => {
    if (!(id && accountType && email)) {
      console.log('잘못된 접근')
    }

    if (!isLoading && (isError || !data?.validatePreSignupUser)) {
      console.log('잘못된 접근')
    }
  }, [data, isLoading, isError])

  const [isComplete, setIsComplete] = useState(false)

  const [inputValue, setInputValue] = useState({
    NAME: '',
    TEL: '',
  })
  const [inputErrorMsg, setInputErrorMsg] = useState({
    NAME: '',
    TEL: '',
  })

  function handleChange(e) {
    let { value, name } = e.target
    let nextValue = { ...inputValue }
    if (e.target.name === 'TEL') {
      const regExp = /[^0-9]/g
      value = value.replace(regExp, '')
    }
    nextValue[name] = value
    setInputValue(nextValue)
    validateInputValue({ value, name })
  }

  function validateInputValue({ value, name }) {
    let nextInputErrorMsg = { ...inputErrorMsg }
    if (REG_EXP?.[name] && !REG_EXP[name].test(value)) {
      nextInputErrorMsg[name] = ERR_MSG[name]
      setInputErrorMsg(nextInputErrorMsg)
    } else {
      nextInputErrorMsg[name] = ''
      setInputErrorMsg(nextInputErrorMsg)
    }
  }

  function TelParser(tel) {
    if (tel.length < 4) return tel
    if (tel.length < 7) return `${tel.slice(0, 3)}-${tel.slice(3)}`
    if (tel.length < 11) return `${tel.slice(0, 3)}-${tel.slice(3, 6)}-${tel.slice(6)}`
    return `${tel.slice(0, 3)}-${tel.slice(3, 7)}-${tel.slice(7)}`
  }

  const isDisabled = Object.values(inputErrorMsg).some(err => !!err) || Object.values(inputValue).some(val => !val)

  return (
    <div className={cx('container')}>
      {!isComplete ? (
        <>
          <h1>회원 가입</h1>
          <div className={cx('form-container')}>
            <div className={cx('input-container')}>
              <label>
                <span>이메일</span>
              </label>
              <div className={cx('input-wrapper')}>
                {email}
                {/* <input
              type="text"
              placeholder="이름을 입력해주세요."
              name="NAME"
              autoComplete="off"
              value={inputValue.NAME}
              onChange={handleChange}
            />
            <span className={cx('value-indicator')}>{inputValue.NAME}</span> */}
              </div>
              <span className={cx('err-msg')}></span>
            </div>
            <div className={cx('input-container', { errored: !!inputErrorMsg.NAME })}>
              <label>
                <span>이름</span>
              </label>
              <div className={cx('input-wrapper')}>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요."
                  name="NAME"
                  autoComplete="off"
                  value={inputValue.NAME}
                  onChange={handleChange}
                />
                <span className={cx('value-indicator')}>{inputValue.NAME}</span>
              </div>
              <span className={cx('err-msg')}>{inputErrorMsg?.NAME}</span>
            </div>
            <div className={cx('input-container', { errored: !!inputErrorMsg.TEL })}>
              <label>
                <span>휴대전화번호</span>
              </label>
              <div className={cx('input-wrapper')}>
                <input
                  type="text"
                  placeholder={`"-"없이 입력해주세요`}
                  name="TEL"
                  value={inputValue.TEL}
                  autoComplete="off"
                  className={cx('tel')}
                  maxLength={11}
                  onChange={handleChange}
                />
                <span className={cx('value-indicator')}>{TelParser(inputValue.TEL)}</span>
              </div>
              <span className={cx('err-msg')}>{inputErrorMsg?.TEL}</span>
            </div>
          </div>
          <button className={cx('submit-btn')} disabled={isDisabled} onClick={handleSubmit}>
            <span>회원가입</span>
          </button>
          <SignUpBtnGroup {...{ buttonList }} />
        </>
      ) : (
        <>
          <div className={cx('congratulation-icon')}>
            <Image src={`/assets/congratulation/congratulation.png`} alt={'congratulation'} width={32} height={32} />
          </div>
          <h1>
            김티처님, 티처클라우드의 회원이
            <br />
            되신것을 환영합니다.
          </h1>
          <p className={cx('sub-title')}>
            선생님이 찾는 모든 것<br />
            티처 클라우드에서 바로 해결하세요.
          </p>
          <Link className={cx('confirm-btn')} href={PATH.HOME}>
            <span>확인</span>
          </Link>
        </>
      )}
    </div>
  )
}
