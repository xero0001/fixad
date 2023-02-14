'use client'

import classNames from 'classnames/bind'
import styles from '../layout.module.css'
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation'
import { NavItem } from './LeftNavBar'
const cx = classNames.bind(styles)

interface Props {
  NavItemList: NavItem[]
}

export default function AdminPageTitle({ NavItemList }: Props): JSX.Element {
  const pathname = usePathname()

  const navItems = []
  NavItemList.map(group => {
    group.menuList.map(navItem => {
      navItems.push(navItem)
    })
  })

  const currentNavItem = navItems.find(navItem => {
    return pathname.startsWith(navItem.baseUrl)
  })

  return (
    <div className={cx('admin-page-title')}>
      <div className={cx('title-item')}>
        <currentNavItem.Icon className={cx('icon')} />
        {currentNavItem.label}
      </div>
    </div>
  )
}
