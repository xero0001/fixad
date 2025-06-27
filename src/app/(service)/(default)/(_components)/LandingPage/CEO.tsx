import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { t } from '@root/src/shared/utils/getTranslation'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const LS = {
  ceo: {
    ko: '김선우',
    ja: '金宣雨',
    en: 'Kim Sunwoo',
  },
}

export default function CEO({ lang }: { lang: string }) {
  return (
    <div id="ceo" className="py-32 max-w-7xl border-t-2 border-t-black mx-5 xl:mx-auto">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center ">CEO</div>
      <div className="mt-16 grid grid-template lg:grid-cols-[3fr_3fr]">
        {/* CEO 사진 및 이름 */}
        <div className="lg:border-r-2 border-l-black border-r-black w-full">
          <div className="relative">
            {/* <div className="absolute px-12 text-white">
              <h2 className="text-5xl mt-4">가지왕</h2>
              <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
            </div> */}
            <div className="w-full bg-gray-100 aspect-[1/1] overflow-hidden">
              <img src="/ceo.jpg" alt="ceo" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="h-[2px] bg-black mb-4 hidden lg:block" />
          <div className="py-12 pt-10 lg:py-4 lg:px-12">
            {/* <h3 className="text-3xl lg:text-4xl">이력</h3> */}
            <h3 className="text-4xl lg:text-5xl tracking-widest">{t(LS.ceo, lang)}</h3>
            <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
            <p className="text-lg mt-8">
              2022 Hot place gym CEO
              <br />
              2023 투초이스 법인 총괄
              <br />
              2023 빅지 엔터테인먼트 설립
            </p>
          </div>
        </div>
        {/* 이력 및 회사이념 */}
        <div className="lg:pl-12">
          {/* <div className="py-4 hidden lg:block">
            <h3 className="text-5xl tracking-widest">이선우</h3>
            <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
          </div>
          <div className="h-[2px] bg-black lg:my-4 lg:w-full w-32 mx-auto" /> */}
          <div className="py-8 lg:py-4">
            <h3 className="text-3xl lg:text-4xl">회사이념</h3>
            <p className="text-base lg:text-lg mt-4">
              " 광고주와 크리에이터를 잇다 "
              <br />
              <br />
              빅지 엔터테이먼트는 광고주의 니즈와 크리에이터의 가치를 최우선으로 생각하며, 광고주 크리에이터
              빅지엔터테이먼트 모두가 함께 성장할 수 있는 시장을 만들어가고 있습니다.
              <br />
              <br />
              단순한 광고가 아닌 모두가 찾아가고 싶은 집을 만들고 싶습니다.
              <br />
              <br />
              크리에이터들이 품고 있는 가능성과 업주들이 펼쳐나가는 꿈 이 두가지 가치 사이를 잇는 징검다리로 빅지
              엔터테이먼트가 항상 서있겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
