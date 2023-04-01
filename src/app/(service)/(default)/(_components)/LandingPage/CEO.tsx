import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function CEO() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="ceo" className="py-6 mx-auto max-w-7xl border-t-2 border-t-black">
      <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">CEO</div>
      <div className="mt-12 grid grid-template grid-cols-[3fr_2fr]">
        {/* CEO 사진 및 이름 */}
        <div className="border-l-2 border-r-2 border-l-black border-r-black flex gap-4 w-full px-16">
          <div className="grow">
            <h2 className="text-5xl mt-4">가지왕</h2>
            <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
          </div>
          <div className="shrink-0 rounded-full bg-gray-100 w-96 h-96"></div>
        </div>
        {/* 이력 및 회사이념 */}
        <div className="pl-12">
          <div className="py-4">
            <h3 className="text-4xl">이력</h3>
            <p className="text-lg mt-2">
              2020 Billboard Power List 선정
              <br />
              2021 Variety 500 선정
              <br />
              2022 빅히트 엔터테인먼트 설립
              <br />
              2023 빅지 엔터테인먼트 설립
            </p>
          </div>
          <div className="h-[2px] bg-black my-4" />
          <div className="py-4">
            <h3 className="text-4xl">회사이념</h3>
            <p className="text-lg mt-2">
              여태까지 사회는 남성성을 죄악시 여기며 남성들이 생물학적으로 강한 희열을 느끼는 여러 사업들을 양지로
              들어내지 못하는 풍토를 만들어왔습니다. 이는 여성들이 몸매의 아름다움을 뽐내는 것부터, 혈투를 벌이며
              관객들의 아드레날린을 폭발시키는 격투기 시장에 이르기까지 다양하게 뿌리내려 있습니다.
              <br />
              저희 ‘빅지’는 수많은 위험으로 부터 <b>소속 연예인들을 지키는 든든한 오빠, 형</b>이 되어주고자 출범한
              엔터테인먼트입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
