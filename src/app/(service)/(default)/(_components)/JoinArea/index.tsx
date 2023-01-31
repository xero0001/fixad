import classNames from 'classnames/bind'
import styles from './JoinArea.module.css'
const cx = classNames.bind(styles)

export default function JoinArea() {
  return (
    <div className={cx('container')}>
      <div className={cx('content_wrap')}>
        <div className={cx('text_wrap')}>
          <div className={cx('title')}>신학기 전에</div>
          <div className={cx('title')}>미리 만나요!</div>
          <div className={cx('date')}>2023.02.16</div>
          <div className={cx('coming')}>COMING SOON</div>
        </div>
        <img src="/assets/illust/illust_130.svg" alt="illust_130" />
      </div>
      <button className={styles.join_button}>회원 가입하기</button>
    </div>
  )
}
