'use client'

import styles from './UserInfoUpdate.module.css'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)

export default function UserInfoUpdate() {
  const [inputValue, setInputValue] = useState({
    NAME: '',
    TEL1: '',
    TEL2: '',
    TEL3: '',
  })

  function handleKeyPressNumberOnly(event) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }
  }

  function handleChange(e) {
    const { value, name } = e.target
    let nextValue = { ...inputValue }
    nextValue[name] = value
    setInputValue(nextValue)
    // validateInputValue({ value, name });
  }

  return (
    <div className={cx('container')}>
      <h1>회원 가입</h1>
      <div className={cx('form-container')}>
        <div className={cx('input-container')}>
          <label>
            <span>이름</span>
          </label>
          <div className={cx('input-wrapper')}>
            <input type="text" placeholder="실명을 입력해주세요." name="NAME" onChange={handleChange} />
          </div>
        </div>
        <div className={cx('input-container')}>
          <label>
            <span>휴대전화 번호</span>
          </label>
          <div className={cx('input-wrapper')}>
            <input
              type="text"
              placeholder="010"
              name="TEL1"
              className={cx('tel')}
              maxLength={3}
              onChange={handleChange}
              onKeyPress={handleKeyPressNumberOnly}
            />
            <input
              type="text"
              placeholder="1234"
              name="TEL2"
              className={cx('tel')}
              maxLength={4}
              onChange={handleChange}
              onKeyPress={handleKeyPressNumberOnly}
            />
            <input
              type="text"
              placeholder="5678"
              name="TEL3"
              className={cx('tel')}
              maxLength={4}
              onChange={handleChange}
              onKeyPress={handleKeyPressNumberOnly}
            />
          </div>
        </div>
      </div>
      <button className={cx('submit-btn')} disabled={true}>
        <span>확인</span>
      </button>
    </div>
  )
}
