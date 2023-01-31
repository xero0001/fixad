// import { useMediaQuery } from 'react-responsive'

import classNames from 'classnames/bind'
import styles from './MediaQuery.module.css'
const cx = classNames.bind(styles)

function Mobile({ children }) {
  return <span className={cx('mobile')}>{children}</span>
}

function Pc({ children }) {
  return <span className={cx('pc')}>{children}</span>
}

export { Mobile, Pc }
