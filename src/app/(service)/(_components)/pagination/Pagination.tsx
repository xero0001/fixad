'use client'

import { Dispatch, SetStateAction } from 'react'

import classNames from 'classnames/bind'
import styles from './Pagination.module.css'
import PaginationItem from './PaginationItem'
const cx = classNames.bind(styles)

interface Props {
  page: number
  setPage: Dispatch<SetStateAction<number>> | ((page: number) => void)
  size: number
  count: number
}

const MAX_NAVIGATOR_NUMBER = 5

export default function Pagination({ page, setPage, size, count }: Props): JSX.Element {
  const maxPage = Math.floor((count - 1) / size) + 1
  const pageList = Array.from({ length: maxPage }, (value, idx) => idx + 1)

  return (
    <div className={cx('pagination')}>
      <ul className={cx('pagination-list')}>
        {pageList?.length > 0 &&
          pageList.map((value, idx) => {
            if (page - 1 <= Math.floor((MAX_NAVIGATOR_NUMBER - 1) / 2)) {
              if (value <= page) {
                return <PaginationItem {...{ value, page, setPage, key: idx }} />
              } else {
                if (maxPage - page <= (MAX_NAVIGATOR_NUMBER - 1) / 2) {
                  return <PaginationItem {...{ value, page, setPage, key: idx }} />
                } else {
                  if (value <= MAX_NAVIGATOR_NUMBER) {
                    return <PaginationItem {...{ value, page, setPage, key: idx }} />
                  }
                }
              }
            } else {
              if (value <= page) {
                if (maxPage - page <= Math.ceil((MAX_NAVIGATOR_NUMBER - 1) / 2)) {
                  if (maxPage - MAX_NAVIGATOR_NUMBER + 1 <= value) {
                    return <PaginationItem {...{ value, page, setPage, key: idx }} />
                  }
                } else {
                  if (page - Math.floor((MAX_NAVIGATOR_NUMBER - 1) / 2) <= value) {
                    return <PaginationItem {...{ value, page, setPage, key: idx }} />
                  }
                }
              } else {
                if (maxPage - page <= Math.ceil((MAX_NAVIGATOR_NUMBER - 1) / 2)) {
                  return <PaginationItem {...{ value, page, setPage, key: idx }} />
                } else {
                  if (value <= page + Math.ceil((MAX_NAVIGATOR_NUMBER - 1) / 2)) {
                    return <PaginationItem {...{ value, page, setPage, key: idx }} />
                  }
                }
              }
            }
          })}
      </ul>
    </div>
  )
}
