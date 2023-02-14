'use client'

import classNames from 'classnames/bind'
import styles from '../layout.module.css'
import { IoExitOutline } from 'react-icons/io5'
import { IconType } from 'react-icons'
import NavItem from './NavItem'
import { PATH } from '@root/src/shared/const'
const cx = classNames.bind(styles)

interface Props {
  NavItemList: NavItem[]
}

export interface NavItem {
  groupLabel: string
  menuList: {
    baseUrl: string
    href: string
    label: string
    Icon: IconType
    subNavItemList?: {
      baseUrl: string
      href: string
      label: string
    }[]
  }[]
}

export default function LeftNavBar({ NavItemList }: Props) {
  return (
    <div className={cx('left-nav-bar')}>
      <ul className={cx('left-nav-bar-content')}>
        <li className={cx('nav-item-group')}>
          <ul className={cx('nav-item-list')}>
            <NavItem
              baseUrl={PATH.HOME}
              href={PATH.HOME}
              label="홈페이지로 이동"
              Icon={IoExitOutline}
              isReturnToHomeBtn={true}
            />
          </ul>
        </li>
        {NavItemList.map((group, idx) => {
          return (
            <li className={cx('nav-item-group')} key={idx}>
              <div>{group.groupLabel}</div>
              <ul className={cx('nav-item-list')}>
                {group.menuList.map((item, itemIdx) => {
                  return (
                    <NavItem
                      baseUrl={item.baseUrl}
                      href={item.href}
                      label={item.label}
                      Icon={item.Icon}
                      key={itemIdx}
                      subNavItemList={item.subNavItemList}
                    />
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
