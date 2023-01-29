import styles from './Footer.module.css'
import classNames from 'classnames/bind'
import { Fragment } from 'react'

const cx = classNames.bind(styles)

const footerContents = [
  '주식회사 옐로우보드',
  '사업자번호 : 672-87-02347',
  '대표이사 : 이재필',
  '주소 : 서울특별시 강남구 강남대로 314(역삼동, 서우빌딩) 별관 3층',
  '통신판매업신고번호 : 2022-서울강남-04885',
]

export default function Footer() {
  return (
    <footer className={cx('footer-container')}>
      <div className={cx('content')}>
        {footerContents.map((content, i) => {
          return (
            <Fragment key={i}>
              {i !== 0 && <div className={cx('bar')} />}
              <p>{content}</p>
            </Fragment>
          )
        })}
      </div>
    </footer>
  )
}
