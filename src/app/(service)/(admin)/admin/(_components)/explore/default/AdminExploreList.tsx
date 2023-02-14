'use client'

import styles from './AdminItemList.module.css'
import classNames from 'classnames/bind'
import { Dispatch, SetStateAction } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { queryClient } from '@root/src/client/shared'
import { useSearchParams } from 'next/navigation'

const cx = classNames.bind(styles)

interface Props {
  headers: any[]
  data: any
  totalCount: number
  baseUrl: string
  useHook: any
  filterTabGroups: any[]
  searchParam?: string
  checkedItemList: number[]
  setCheckedItemList: Dispatch<SetStateAction<number[]>>
}

export default function AdminItemList({
  headers,
  data,
  totalCount,
  baseUrl,
  useHook,
  filterTabGroups,
  searchParam,
  checkedItemList,
  setCheckedItemList,
}: Props): JSX.Element {
  const searchParams = useSearchParams()

  const { useDelete, key } = useHook()
  const { mutate: deleteMutate } = useDelete({
    onSuccess: (data, _variables, _context) => {
      setCheckedItemList([])
      queryClient.refetchQueries([key])
      alert('삭제가 완료되었습니다.')
    },
    onError: () => {
      alert('삭제에 실패하였습니다.')
    },
  })

  function handleClickCheckBtn(id: number) {
    const origin = [...checkedItemList]
    if (checkedItemList.includes(id)) {
      const filtered = origin.filter(el => el !== id)
      setCheckedItemList(filtered)
      return
    } else {
      origin.push(id)
      setCheckedItemList(origin)
    }
  }

  async function handleClickDeleteBtn() {
    if (confirm('선택된 아이템들을 삭제하시겠습니까?')) {
      await deleteMutate({ idList: checkedItemList })
    }
  }

  const isCheckedAll = checkedItemList.length === data.length

  function handleCheckAll() {
    if (isCheckedAll) {
      setCheckedItemList([])
      return
    }

    const idList = data.map((item: any) => item.id)
    setCheckedItemList(idList)
  }

  return (
    <div className={cx('admin-item-list')}>
      <div className={cx('title-area')}>
        <div className={cx('title')}>
          {searchParam && `'${searchParam}' 검색결과: `}
          {`총 ${totalCount}개`}
        </div>
        <div className={cx('buttons-wrapper')}>
          {filterTabGroups.map((filterTabGroup, idx) => {
            const selectedTab = filterTabGroup.tabs.find(
              tab => tab.value === searchParams.get(filterTabGroup.groupValue),
            )
            const buttons = selectedTab?.buttons

            return (
              <ul key={idx} className={cx('group-buttons')}>
                {buttons?.map((button, idx) => (
                  <li key={idx}>
                    <button
                      className={cx('action-button')}
                      disabled={checkedItemList.length === 0}
                      onClick={async () => {
                        if (checkedItemList.length === 0) return
                        button.action(checkedItemList)
                        setCheckedItemList([])
                      }}>
                      {button.label}
                    </button>
                  </li>
                ))}
              </ul>
            )
          })}
          <ul className={cx('group-buttons')}>
            <li>
              <button
                className={cx('action-button')}
                disabled={checkedItemList.length === 0}
                onClick={handleClickDeleteBtn}>
                삭제
              </button>
            </li>
          </ul>
        </div>
      </div>
      <table className={cx('item-list')}>
        <thead>
          <tr className={cx('item')}>
            <th className={cx('check-wrapper')}>
              <div className={cx('check-btn', { checked: isCheckedAll })} onClick={handleCheckAll}>
                {isCheckedAll && <BsCheckLg />}
              </div>
            </th>
            {headers.map((header, idx) => {
              return <th key={idx}>{header.label}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr className={cx('item')} key={idx}>
                <td className={cx('check-wrapper')}>
                  <div
                    className={checkedItemList.includes(item.id) ? cx('check-btn', 'checked') : cx('check-btn')}
                    onClick={() => {
                      handleClickCheckBtn(item.id)
                    }}>
                    {checkedItemList.includes(item.id) && <BsCheckLg />}
                  </div>
                </td>
                {headers?.map((col, colIdx) => {
                  return (
                    <td key={colIdx}>
                      {col.key && item[col.key]}
                      {col.render && col.render(item)}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
