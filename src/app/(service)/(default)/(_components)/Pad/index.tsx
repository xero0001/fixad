import classNames from 'classnames/bind'
import styles from './Pad.module.css'
const cx = classNames.bind(styles)

export default function Pad() {
  return <div className={cx('pad')} />
}
