'use client'

import styles from './AdminItemList.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface Props {
  filterTabGroup: any
  selectedTab: string
  onSelectTab: (groupName: string, value: string) => void
}

export default function AdminFilterTabs({ filterTabGroup, selectedTab, onSelectTab }: Props): JSX.Element {
  const { groupLabel, groupValue, tabs } = filterTabGroup

  return (
    <div className={cx('admin-filter-tabs-wrapper')}>
      <div className={cx('group-name')}>{groupLabel}</div>
      <ul className={cx('tabs-wrapper')}>
        {tabs.map((tab, idx) => {
          return (
            <li
              key={idx}
              className={cx('tab', { active: tab.value === selectedTab })}
              onClick={() => onSelectTab(groupValue, tab.value)}>
              {tab.label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
