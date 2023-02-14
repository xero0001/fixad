'use client'

import { Dispatch, MouseEvent, MutableRefObject, SetStateAction, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useRouter, useSearchParams } from 'next/navigation'

import styles from './AdminSearchBar.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
  baseUrl: string
  setSearchParam: Dispatch<SetStateAction<string>>
  setPage?: Dispatch<SetStateAction<number>>
  placeholder?: string
}

export default function AdminSearchBar({ baseUrl, setSearchParam, setPage, placeholder = '검색' }: Props): JSX.Element {
  const searchParams = useSearchParams()
  const categorySlug = searchParams.get('categorySlug')

  function handleSearch() {
    setSearchParam(searchParamInputRef.current.value)
  }

  function handleClick(e: MouseEvent) {
    e.preventDefault()
    handleSearch()
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const searchParamInputRef = useRef() as MutableRefObject<HTMLInputElement>

  useEffect(() => {
    searchParamInputRef.current.value = null
  }, [categorySlug])

  return (
    <div className={cx('search-bar-container', 'admin-search-bar')}>
      <div className={cx('search-bar')}>
        <input
          className={cx('search-bar-input')}
          placeholder={placeholder}
          ref={searchParamInputRef}
          onKeyDown={handleKeyDown}
        />
        <IoSearchOutline className={cx('search-icon')} onClick={handleClick} />
      </div>
    </div>
  )
}
