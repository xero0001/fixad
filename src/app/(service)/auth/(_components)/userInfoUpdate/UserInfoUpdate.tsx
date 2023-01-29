'use client'

import { useState } from 'react'
import { ERR_MSG, REG_EXP } from '@root/src/shared/const'
import { useSearchParams } from 'next/navigation'

import styles from './UserInfoUpdate.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function UserInfoUpdate() {
  const searchParams = useSearchParams()

  // 쿼리스트링 파싱
  const id = searchParams.get('id')
  const email = searchParams.get('email')
  const accountType = searchParams.get('accountType')

  // console.log({ id, email, accountType }) -> id, email, accountType 쿼리 콘솔 로그

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
      nextValue[name] = value
    } else {
      nextValue[name] = value
    }
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
      <h1>회원 가입</h1>
      <div className={cx('form-container')}>
        <div className={cx('input-container', { errored: !!inputErrorMsg.NAME })}>
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
          <span className={cx('err-msg')}>{inputErrorMsg?.NAME}</span>
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
      <button className={cx('submit-btn')} disabled={isDisabled}>
        <span>회원가입</span>
      </button>
    </div>
  )
}
