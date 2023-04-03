import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

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
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">CREATORS</div>

      {/* <div className="mx-auto max-w-7xl text-center">
        <div className="w-full">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span
              className="bg-gray-900 inline-block h-[2px] relative align-middle w-1/3 right-4"
              style={{
                marginLeft: '-50%',
              }}
            />
            Creators
            <span
              className="bg-gray-900 inline-block h-[2px] relative align-middle w-1/3 left-4"
              style={{
                marginRight: '-50%',
              }}
            />
          </h2>
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-2 gap-6 mx-auto">
          <div className="bg-gray-100 h-96 w-full">
            <div className="flex flex-col justify-end h-full bottom-0 p-2">
              <div className="text-5xl">진다율</div>
              <div className="mt-2 text-base">진다율님 설명.</div>
              <div className="">링크트리</div>
              <div className="grid grid-cols-4">
                <div className="">인스타</div>
                <div className="">온리팬스</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-96 w-full">
            <div className="flex flex-col justify-end h-full bottom-0 p-2">
              <div className="text-5xl">이진세</div>
              <div className="mt-2 text-base">이진세님 설명.</div>
              <div className="">링크 트리</div>
              <div className="grid grid-cols-4">
                <div className="">인스타</div>
                <div className="">유튜브</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
