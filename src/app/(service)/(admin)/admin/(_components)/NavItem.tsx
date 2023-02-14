'use client'

import classNames from 'classnames/bind'
import styles from '../layout.module.css'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation'
const cx = classNames.bind(styles)

interface Props {
  baseUrl: string
  href: string
  label: string
  Icon: IconType
  isReturnToHomeBtn?: boolean
  subNavItemList?: {
    baseUrl: string
    href: string
    label: string
  }[]
}

export default function NavItem({ baseUrl, href, label, Icon, isReturnToHomeBtn, subNavItemList }: Props) {
  const pathname = usePathname()

  return (
    <>
      <Link
        href={href}
        className={
          isReturnToHomeBtn
            ? cx('nav-item', 'home')
            : pathname.startsWith(baseUrl)
            ? cx('nav-item', 'active')
            : cx('nav-item')
        }>
        <Icon className={cx('icon')} />
        {label}
      </Link>
      {pathname.startsWith(baseUrl) && subNavItemList?.length > 0 && (
        <ul className={cx('sub-nav-item-wrapper')}>
          {subNavItemList.map((subNavItem, idx) => {
            return (
              <Link
                key={idx}
                href={subNavItem.href}
                className={cx('sub-nav-item', { active: pathname.startsWith(subNavItem.baseUrl) })}>
                {subNavItem.label}
              </Link>
            )
          })}
        </ul>
      )}
    </>
  )
}
