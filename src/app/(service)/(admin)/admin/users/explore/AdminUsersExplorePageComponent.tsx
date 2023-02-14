'use client'

import AdminExplore from '../../(_components)/explore/default'
// import { PATHNAME } from '@root/src/client/consts'
import { PATH } from '@root/src/shared/const'
// import { useAdmin } from '@root/src/client/hooks/queries/admin/useAdminOrder'
import { useAdminUsers } from '@root/src/client/hooks/admin/useAdminUsers'
import { kdayjs } from '@root/src/shared/utils'
// import { fc } from '@root/src/client/utils'
// import { ORDER_STATUS } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
// import { adminShippingOrdersMutation, adminCompleteOrdersMutation } from '@root/src/client/shared/queries/auth/admin'
// import { queryClient } from '@root/src/client/shared/react-query'

const PAGE_SIZE = 20
const BASE_URL = PATH.ADMIN_USERS

function getIsFinished(isFinished) {
  return isFinished ? '가입완료' : '가입진행중'
}

function getAccountType(accountType) {
  switch (accountType) {
    case 'EMAIL':
      return '이메일'
    case 'KAKAO':
      return '카카오'
    case 'GOOGLE':
      return '구글'
    case 'NAVER':
      return '네이버'
    default:
      return '이메일'
  }
}

export default function AdminUsersExplorePageComponent(): JSX.Element {
  const { key } = useAdminUsers()

  const headers = [
    {
      label: '회원ID',
      key: 'id',
    },
    {
      label: '이메일',
      key: 'email',
    },
    {
      label: '이름',
      key: 'name',
    },
    {
      label: '연락처',
      key: 'tel',
    },
    {
      label: '가입일시',
      render: row => kdayjs(row?.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      label: '완료여부',
      render: row => getIsFinished(row?.isFinished),
    },
    {
      label: '계정타입',
      render: row => getAccountType(row?.accountType),
    },
  ]

  const filterTabGroups = [
    {
      groupLabel: '계정타입',
      groupValue: 'accountType',
      tabs: [
        {
          value: '',
          label: '전체',
        },
        {
          value: 'EMAIL',
          label: '이메일',
        },
        {
          value: 'KAKAO',
          label: '카카오',
        },
        {
          value: 'NAVER',
          label: '네이버',
        },
        {
          value: 'GOOGLE',
          label: '구글',
        },
      ],
    },
  ]

  return (
    <AdminExplore
      useHook={useAdminUsers}
      baseUrl={BASE_URL}
      headers={headers}
      searchPlaceholder="'이름', '이메일', '연락처'로 검색"
      filterTabGroups={filterTabGroups}
    />
  )
}
