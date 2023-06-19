import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SiOnlyfans } from 'react-icons/si'
import { SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl'
import { SiLinktree } from 'react-icons/si'
import { RxInstagramLogo } from 'react-icons/rx'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Creators() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="creators" className="py-32 mx-auto max-w-7xl px-5 xl:px-0">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center ">CREATORS</div>
      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-2 gap-6 mx-auto">
          <div className="relative">
            <div className="bg-gray-100 aspect-[3/4] w-full relative">
              <div className="absolute w-full h-full">
                <img src="/assets/profiles/이진세/ljs_1.png" alt="ljs" className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              className="flex flex-col px-6 py-6 w-full space-y-2 lg:space-y-3 absolute text-white"
              style={{
                transform: 'translateY(-100%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <div className="flex items-end text-3xl lg:text-5xl space-x-4 lg:space-x-6">
                <div className="flex flex-col">
                  <span>이진세</span>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 lg:w-[56px] lg:h-[56px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
              <div className="text-lg lg:text-2xl">MMA 파이터</div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 aspect-[3/4] w-full relative">
              <div className="absolute w-full h-full">
                <img src="/assets/profiles/진다율/1.jpg" alt="ljs" className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              className="flex flex-col px-6 py-6 w-full space-y-2 lg:space-y-3 absolute text-white"
              style={{
                transform: 'translateY(-100%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <div className="flex items-end text-3xl lg:text-5xl space-x-4 lg:space-x-6">
                <div className="flex flex-col">
                  <span>진다율</span>
                </div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 lg:w-[56px] lg:h-[56px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
              <div className="text-lg lg:text-2xl">모델</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
