'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getIntoViewElement } from '@root/src/shared/utils/scroll'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'SERVICES', href: 'creators' },
  { name: 'WORKS', href: 'works' },
  { name: 'CEO', href: 'ceo' },
  { name: 'CONTACT', href: 'contact' },
]

type Language = {
  code: string
  flag: string
  name: string
}

const languages: Language[] = [
  { code: 'ko', flag: 'kor.svg', name: 'KOR' },
  { code: 'en', flag: 'usa.svg', name: 'ENG' },
  // { code: 'zh-TW', flag: 'tpe.svg', name: 'TWN' },
  { code: 'ja', flag: 'jpn.svg', name: 'JPN' },
]

export default function Example() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed z-10 w-full border-b border-b-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-0" aria-label="Global">
        <a href="#hero" className="-m-1.5 p-1.5">
          <span className="sr-only">FIXAD</span>
          <img className="h-10 w-auto" src="/main_logo.png" alt="logo" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(item => (
            <button
              key={item.name}
              onClick={e => {
                e.preventDefault()
                getIntoViewElement(item.href)
              }}
              className="text-xl font-semibold leading-6 text-black">
              {item.name}
            </button>
          ))}
          {/* <div className="flex gap-2">
            {languages.map(lang => {
              if (lang.code === 'ko') {
                return (
                  <Link key={lang.code} className="text-sm font-semibold leading-6 text-black" href="/">
                    {lang.name}
                  </Link>
                )
              }

              return (
                <Link key={lang.code} className="text-sm font-semibold leading-6 text-black" href={`/${lang.code}`}>
                  {lang.name}
                </Link>
              )
            })}
          </div> */}
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BIG-G ENTERTAINMENT</span>
              <img className="h-10 w-auto" src="/blgg_logo_bottom_opt.webp" alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <button
                    key={item.name}
                    onClick={e => {
                      e.preventDefault()
                      getIntoViewElement(item.href)
                      setMobileMenuOpen(false)
                    }}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <div className="flex gap-3">
              {languages.map(lang => (
                <div
                  key={lang.code}
                  className="flex flex-col gap-1 items-center px-1 py-1.5 min-w-0 w-fit transition-all duration-150 ease-in-out"
                  onClick={() => {
                    if (lang.code === 'ko') {
                      router.push('/')
                    } else {
                      router.push(`/${lang.code}`)
                    }
                    setMobileMenuOpen(false)
                  }}>
                  <Image src={`/images/icons/${lang.flag}`} alt={lang.name} width={30} height={30} />
                  <span className="whitespace-nowrap font-semibold text-[11px] leading-[16px]">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">BIG-G ENTERTAINMENT</span>
              <img className="h-10 w-auto" src="/blgg_logo_bottom_opt.webp" alt="logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  )
}
