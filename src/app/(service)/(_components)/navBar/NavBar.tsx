'use client'

import { MAIN_NAV_ITEMS } from '../../../../shared/const/path'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          {MAIN_NAV_ITEMS.map((item, i) => {
            return (
              <li key={i}>
                <NavBarItem
                  {...{
                    href: item.href,
                    baseUrl: item.href,
                    label: item.label,
                    exact: false,
                    showExternalMark: true,
                  }}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
