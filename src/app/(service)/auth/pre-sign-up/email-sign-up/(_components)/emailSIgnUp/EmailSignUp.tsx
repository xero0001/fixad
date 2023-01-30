'use client'

import { useState } from 'react'
import { ERR_MSG, PATH, REG_EXP } from '@root/src/shared/const'
import { useRouter, useSearchParams } from 'next/navigation'
import { signupPreRegisteredUserMutation } from '@client/queries/'
import styles from './EmailSignUp.module.css'
import classNames from 'classnames/bind'
import SignUpBtnGroup from '../../../(_components)/preSignUp/elements/signUpBtnGroup/SignUpBtnGroup'
import { ACCOUNT_TYPE } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
const cx = classNames.bind(styles)

const buttonList: { name: ACCOUNT_TYPE }[] = [
  {
    name: ACCOUNT_TYPE.NAVER,
  },
  {
    name: ACCOUNT_TYPE.GOOGLE,
  },
  {
    name: ACCOUNT_TYPE.KAKAO,
  },
]

export default function EmailSignUp() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState({
    EMAIL: '',
    NEW_PASSWORD: '',
    PASSWORD_CONFIRM: '',
  })
  const [inputErrorMsg, setInputErrorMsg] = useState({
    EMAIL: '',
    NEW_PASSWORD: '',
    PASSWORD_CONFIRM: '',
  })

  function handleChange(e) {
    let { value, name } = e.target
    let nextValue = { ...inputValue }

    nextValue[name] = value
    setInputValue(nextValue)
    validateInputValue({ value, name })
  }

  function validateInputValue({ value, name }) {
    let nextInputErrorMsg = { ...inputErrorMsg }
    if (REG_EXP?.[name] && !REG_EXP[name].test(value)) {
      nextInputErrorMsg[name] = ERR_MSG[name]
      setInputErrorMsg(nextInputErrorMsg)
      return
    } else {
      nextInputErrorMsg[name] = ''
      setInputErrorMsg(nextInputErrorMsg)
    }

    if (name === 'NEW_PASSWORD') {
      if (value !== inputValue.PASSWORD_CONFIRM) {
        nextInputErrorMsg.PASSWORD_CONFIRM = ERR_MSG.PASSWORD_CONFIRM
        setInputErrorMsg(nextInputErrorMsg)
      } else {
        nextInputErrorMsg.PASSWORD_CONFIRM = ''
        setInputErrorMsg(nextInputErrorMsg)
      }
    }

    if (name === 'PASSWORD_CONFIRM') {
      if (value !== inputValue.NEW_PASSWORD) {
        nextInputErrorMsg.PASSWORD_CONFIRM = ERR_MSG.PASSWORD_CONFIRM
        setInputErrorMsg(nextInputErrorMsg)
      } else {
        nextInputErrorMsg.PASSWORD_CONFIRM = ''
        setInputErrorMsg(nextInputErrorMsg)
      }
    }
  }

  function masking(password) {
    return password.replace(/./g, '*')
  }

  const isDisabled = Object.values(inputErrorMsg).some(err => !!err) || Object.values(inputValue).some(val => !val)

  const { mutate } = useMutation(signupPreRegisteredUserMutation, {
    onSuccess: data => {
      router.push(
        `${PATH.AUTH_PRESIGNUP_EXTRA}?id=${data.signupPreRegisteredUser.id}&email=${data.signupPreRegisteredUser.email}&accountType=${ACCOUNT_TYPE.EMAIL}`,
      )
    },
    onError: error => {
      if ((error as any).response?.errors[0].message === 'EXISTING_USER') {
        //[TODO]
      }
    },
  })

  async function handleSubmit() {
    await mutate({
      email: inputValue.EMAIL,
      password: inputValue.NEW_PASSWORD,
    })
  }

  return (
    <div className={cx('container')}>
      <h1>이메일로 가입하기</h1>
      <div className={cx('form-container')}>
        <div className={cx('input-container', { errored: !!inputErrorMsg.EMAIL })}>
          <label>
            <span>이메일</span>
          </label>
          <div className={cx('input-wrapper')}>
            <input
              type="text"
              placeholder="이메일 주소를 입력해주세요."
              name="EMAIL"
              autoComplete="new-password"
              value={inputValue.EMAIL}
              onChange={handleChange}
            />
            <span className={cx('value-indicator')}>{inputValue.EMAIL}</span>
          </div>
          <span className={cx('err-msg')}>{inputErrorMsg?.EMAIL}</span>
        </div>
        <div className={cx('input-container', { errored: !!inputErrorMsg?.['NEW_PASSWORD'] })}>
          <label>
            <span>비밀번호</span>
          </label>
          <div className={cx('input-wrapper')}>
            <input
              type="password"
              placeholder={`알파벳 8자리 이상, 숫자, 특수문자 포함`}
              name="NEW_PASSWORD"
              value={inputValue['NEW_PASSWORD']}
              autoComplete="new-password"
              onChange={handleChange}
            />
            <span className={cx('value-indicator')}>{masking(inputValue['NEW_PASSWORD'])}</span>
          </div>
          <span className={cx('err-msg')}>{inputErrorMsg?.['NEW_PASSWORD']}</span>
        </div>
        <div className={cx('input-container', { errored: !!inputErrorMsg?.PASSWORD_CONFIRM })}>
          <label>
            <span>비밀번호 확인</span>
          </label>
          <div className={cx('input-wrapper')}>
            <input
              type="password"
              placeholder={`비밀번호를 한번 더 입력해주세요.`}
              name="PASSWORD_CONFIRM"
              value={inputValue.PASSWORD_CONFIRM}
              autoComplete="new-password"
              onChange={handleChange}
            />
            <span className={cx('value-indicator')}>{masking(inputValue.PASSWORD_CONFIRM)}</span>
          </div>
          <span className={cx('err-msg')}>{inputErrorMsg?.PASSWORD_CONFIRM}</span>
        </div>
      </div>
      <button className={cx('submit-btn')} disabled={isDisabled} onClick={handleSubmit}>
        <span>회원가입</span>
      </button>
      <SignUpBtnGroup {...{ buttonList }} />
    </div>
  )
}
