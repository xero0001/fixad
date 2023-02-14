'use client'

import LeftNavBar from './(_components)/LeftNavBar'
import { IoMdHome, IoIosPaper } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
// import { HiUsers } from 'react-icons/hi'
// import { FaCoins } from 'react-icons/fa'
// import { BsPlayBtn } from 'react-icons/bs'
// import { RiCustomerService2Fill } from 'react-icons/ri'
// import { useAuthorization } from '@client/hooks'
// import { PATHNAME } from '@root/src/client/consts'
import { PATH } from '@root/src/shared/const'
import AdminPageTitle from './(_components)/AdminPageTitle'
// import { ROLE } from '@prisma/client'
// import { FiMenu } from 'react-icons/fi'
// import { IoMdSettings } from 'react-icons/io'
// import { GrDocumentText } from 'react-icons/gr'
// import { AiOutlineShopping } from 'react-icons/ai'
import { NavItem } from './(_components)/LeftNavBar'

import classNames from 'classnames/bind'
import styles from './layout.module.css'
// import { ImUnlocked } from 'react-icons/im'
const cx = classNames.bind(styles)

const NavItemList: NavItem[] = [
  {
    groupLabel: '',
    menuList: [
      { baseUrl: PATH.ADMIN_HOME, href: PATH.ADMIN_HOME, label: '대시보드', Icon: IoMdHome },
      {
        baseUrl: PATH.ADMIN_USERS,
        href: PATH.ADMIN_USERS_EXPLORE,
        label: '사전가입회원',
        Icon: AiOutlineUser,
        // subNavItemList: [
        //   {
        //     baseUrl: PATHNAME.ADMIN_SHOPPING_ORDER,
        //     href: PATHNAME.ADMIN_SHOPPING_ORDER_EXPLORE,
        //     label: '주문관리',
        //   },
        // ],
      },
    ],
  },
]

export default function AdminPageLayout({ children }) {
  // const { isAuthorized } = useAuthorization({
  //   authRequiredRedirectUrl: PATHNAME.ACCOUNT_LOGIN,
  //   requiredAuthorizationRoles: [ROLE.ADMIN],
  // })
  const isAuthorized = true

  return (
    <>
      {isAuthorized && (
        <div className={cx('admin-page-layout')}>
          <LeftNavBar {...{ NavItemList }} />
          <div className={cx('content-wrapper')}>
            <AdminPageTitle {...{ NavItemList }} />
            <div className={cx('content')}>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}
