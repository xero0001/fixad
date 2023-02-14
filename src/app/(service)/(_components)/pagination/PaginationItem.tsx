import * as React from 'react'

import classNames from 'classnames/bind'
import styles from './Pagination.module.css'
import { Dispatch, SetStateAction } from 'react'
const cx = classNames.bind(styles)

interface Props {
  value: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export default function PagenationItem({ value, page, setPage }: Props) {
  return (
    <li onClick={() => setPage(value)}>
      <button className={cx('pagination-item', { active: page === value })}>{value}</button>
    </li>
  )
}
