'use client'

import styles from './AdminExploreLayout.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

export default function AdminExploreLayout({ children }): JSX.Element {
  return <div className={cx('admin-explore-layout')}>{children}</div>
}
