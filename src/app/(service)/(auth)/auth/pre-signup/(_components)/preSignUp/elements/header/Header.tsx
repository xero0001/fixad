import styles from './Header.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Header() {
  return (
    <div className={cx('header')}>
      <h1 className={cx('title')}>
        <p>선생님이 찾는 모든 것!</p>
        <p>티처클라우드에서 바로 해결하세요.</p>
      </h1>
      <p className={cx('sub-title')}>바로 시작해보세요.</p>
    </div>
  )
}
