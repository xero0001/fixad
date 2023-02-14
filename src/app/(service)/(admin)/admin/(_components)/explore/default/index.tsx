'use client'

// import AdminCreateBtn from '@root/src/client/components/layout/shared/admin/adminCreateBtn'
// import AdminItemList from '@root/src/client/components/layout/shared/admin/adminItemList'
import AdminSearchBar from './AdminSearchBar'
import AdminExploreLayout from './AdminExploreLayout'
import AdminExploreList from './AdminExploreList'
import AdminFilterTabs from './AdminFilterTabs'
// import Pagination from '@root/src/client/components/layout/shared/pagination'
import Pagination from '@root/src/app/(service)/(_components)/pagination/Pagination'
// import AdminSubNavBar from '@root/src/client/components/layout/shared/admin/subNavBar'
// import { PATHNAME } from '@root/src/client/consts'
import { PATH } from '@root/src/shared/const'

import { queryClient } from '@root/src/client/shared'
// import { getParameterizedPath } from '@client/utils'
import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'

import styles from './AdminExploreLayout.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const PAGE_SIZE = 20

interface Props {
  useHook: any
  baseUrl: string
  filterTabGroups: any[]
  headers?: any[]
  size?: number
  isSearchEnabled?: boolean
  searchPlaceholder?: string
}

export default function AdminExploreComponent({
  useHook,
  baseUrl,
  headers,
  filterTabGroups,
  searchPlaceholder,
  isSearchEnabled = true,
  size = PAGE_SIZE,
}: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchParam = searchParams.get('searchParam')
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const status = searchParams.get('status')
  const accountType = searchParams.get('accountType')

  const [checkedItemList, setCheckedItemList] = useState<number[]>([])

  function resetCheckedItemList() {
    setCheckedItemList([])
  }

  function setSearchParam(newParam: string) {
    let newQuery: any = {}
    searchParams.forEach((value, key) => {
      newQuery[key] = value
    })

    delete newQuery.page
    if (newParam === '') {
      delete newQuery.searchParam
    } else {
      newQuery['searchParam'] = newParam
    }
    setQuery(newQuery)
    resetCheckedItemList()
  }

  function setPage(newPage: number) {
    let newQuery: any = {}
    searchParams.forEach((value, key) => {
      newQuery[key] = value
    })
    newQuery = { ...newQuery, page: newPage }

    setQuery(newQuery)
    resetCheckedItemList()
  }

  function setQuery(newQuery) {
    router.push(`${pathname}?${new URLSearchParams(newQuery)}`)
  }

  const queryVariables = {
    status: status as string,
    searchParam: searchParam as string,
    accountType: accountType as string,
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  }

  const { useExplore } = useHook()

  const { data, totalCount, isLoading } = useExplore(queryVariables)

  console.log({ data, totalCount, isLoading, queryVariables })

  function handleSelectTab(groupValue: string, tabValue: string) {
    let newQuery: any = {}
    searchParams.forEach((value, key) => {
      newQuery[key] = value
    })

    delete newQuery.page
    if (tabValue === '') {
      delete newQuery[groupValue]
    } else {
      newQuery[groupValue] = tabValue
    }
    setQuery(newQuery)
    resetCheckedItemList()
  }

  return (
    <AdminExploreLayout>
      {!isLoading && data && (
        <div style={{ width: '100%' }}>
          {isSearchEnabled && (
            <AdminSearchBar
              {...{ baseUrl: `${baseUrl}/explore`, setSearchParam, setPage, placeholder: searchPlaceholder }}
            />
          )}
          <div className={cx('filter-groups')}>
            {filterTabGroups &&
              filterTabGroups.map((filterTabGroup, idx) => (
                <AdminFilterTabs
                  key={idx}
                  filterTabGroup={filterTabGroup}
                  selectedTab={(searchParams.get(filterTabGroup.groupValue) as string) ?? ''}
                  onSelectTab={handleSelectTab}
                />
              ))}
          </div>

          {/* <AdminCreateBtn href={PATHNAME.ADMIN_BOARD_JOBS_NEW} title="취업 및 공모전" /> */}
          {data && (
            <AdminExploreList
              headers={headers}
              data={data}
              totalCount={totalCount}
              baseUrl={baseUrl}
              useHook={useHook}
              searchParam={searchParam as string}
              filterTabGroups={filterTabGroups}
              checkedItemList={checkedItemList}
              setCheckedItemList={setCheckedItemList}
            />
          )}
          <div style={{ marginTop: '30px', marginBottom: 128 }}>
            <Pagination {...{ page, setPage, size, count: totalCount }} />
          </div>
        </div>
      )}
    </AdminExploreLayout>
  )
}
