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
              <div className="text-5xl">카라마조프</div>
              <div className="mt-2 text-base">
                본명 백호. 카일에게 받은 듀퐁 라이터를 보유중이다. 호랑이는 죽어서 가죽을 남기고 사람은 죽어서 이름을
                남긴다는데, 백호는 둘 다 남길수 있다고 한다.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-96 w-full">
            <div className="flex flex-col justify-end h-full bottom-0 p-2">
              <div className="text-5xl">정종은</div>
              <div className="mt-2 text-base">
                24세. 바보가 아니며, 젊어지고싶어하는 아티스트. 늘 새로운 것을 시도하는 멋진 모습을 보여준다.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-96 w-full">
            <div className="flex flex-col justify-end h-full bottom-0 p-2">
              <div className="text-5xl">김영재</div>
              <div className="mt-2 text-base">
                30세. 자신도 같이있었다고 한다. 무엇이든 할 수 있는 능력을 가지고 있다. 햄버거는 양상추에 패티 두장.
              </div>
            </div>
          </div>
          <div className="bg-gray-100 h-96 w-full">
            <div className="flex flex-col justify-end h-full bottom-0 p-2">
              <div className="text-5xl">빅빅트</div>
              <div className="mt-2 text-base">
                하면된다. 하면된다. 하면된다. 하면된다. 하면된다. 하면된다. 하면된다. 하면된다. 하면된다. 하면된다.
                하면된다. 하면된다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
