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
    ja: '金 宣雨（キム•ソヌ）',
    en: 'Kim Sunwoo',
  },
  position: {
    ko: '빅지 엔터테인먼트 대표',
    ja: 'BIG-G ENTERTAINMENT 代表取締役',
    en: 'BIG-G ENTERTAINMENT CEO',
  },
  history1: {
    ko: '2022 Hot place gym CEO',
    ja: '2022 Hot Place Gym CEO',
    en: '2022 Hot Place Gym CEO',
  },
  history2: {
    ko: '2023 투초이스 법인 총괄',
    ja: '2023 Two Choice Consunting 法人総括',
    en: '2023 Two Choice Consulting Corporation General Manager',
  },
  history3: {
    ko: '2023 빅지 엔터테인먼트 설립',
    ja: '2023 BIG-G ENTERTAINMENT 設立',
    en: '2023 BIG-G ENTERTAINMENT Establishment',
  },
  ideology: {
    ko: '회사이념',
    ja: '企業理念',
    en: 'Company Ideology',
  },
  companyIdeology1: {
    ko: `" 광고주와 크리에이터를 잇다 "`,
    ja: `" 広告主とクリエイターとの結び "`,
    en: `" Connecting Advertisers and Creators "`,
  },
  companyIdeology2: {
    ko: '빅지 엔터테이먼트는 광고주의 니즈와 크리에이터의 가치를 최우선으로 생각하며, 광고주 크리에이터 빅지엔터테이먼트 모두가 함께 성장할 수 있는 시장을 만들어가고 있습니다.',
    ja: 'BIG-G ENTERTAINMENTは、広告主様のニーズとクリエイター様の価値を最優先で考え、広告主様、クリエイター様、そしてBIG-Gまで共に成長できるマーケットを創り上げております。',
    en: 'BIG-G ENTERTAINMENT is a company that prioritizes the needs of advertisers and the value of creators, and is creating a market where advertisers, creators, and BIG-G can all grow together.',
  },
  companyIdeology3: {
    ko: '단순한 광고가 아닌 모두가 찾아가고 싶은 집을 만들고 싶습니다.',
    ja: '単なるコマーシャルではなく、皆様から「行きたい」思われる所が創りたいです。',
    en: 'We want to create a home that everyone wants to find.',
  },
  companyIdeology4: {
    ko: '크리에이터들이 품고 있는 가능성과 업주들이 펼쳐나가는 꿈 이 두가지 가치 사이를 잇는 징검다리로 빅지 엔터테이먼트가 항상 서있겠습니다.',
    ja: 'クリエイター様のそれぞれの可能性と、広告主様が抱いている夢を繋ぐ「架け橋」として、BIG-Gが尽力いたします。',
    en: 'As a bridge connecting the potential of creators and the dreams of owners, BIG-G ENTERTAINMENT is always here.',
  },
}

export default function CEO({ lang }: { lang: string }) {
  return (
    <div id="company" className="py-32 max-w-7xl border-t border-t-gray-400 mx-5 xl:mx-auto">
      <div
        className="text-5xl font-bold tracking-tight text-black sm:text-6xl text-center "
        style={{
          color: '#f47963',
          // background: 'linear-gradient(135deg, #f47963, #d12a75)',
          // WebkitBackgroundClip: 'text',
          // WebkitTextFillColor: 'transparent',
        }}>
        COMPANY
      </div>
      <div className="mt-16 grid grid-template lg:grid-cols-[2fr_1fr]">
        {/* CEO 사진 및 이름 */}
        <div className="lg:border-r border-l-black border-r-gray-400 w-full">
          <div className="relative">
            {/* <div className="absolute px-12 text-white">
              <h2 className="text-5xl mt-4">가지왕</h2>
              <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
            </div> */}
            <div className="w-full bg-gray-100 aspect-[1/1] overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-red-500 aspect-square overflow-hidden">
                  <img src="/ceo/1.jpeg" alt="ceo" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="bg-red-500 aspect-square overflow-hidden">
                  <img src="/ceo/2.jpeg" alt="ceo" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="bg-red-500 aspect-square overflow-hidden">
                  <img src="/ceo/3.jpeg" alt="ceo" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="bg-red-500 aspect-square overflow-hidden">
                  <img src="/ceo.jpeg" alt="ceo" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* <img src="/ceo.jpg" alt="ceo" loading="lazy" className="w-full h-full object-cover" /> */}
            </div>
          </div>
          <div className="h-[1px] bg-gray-400 mb-4 hidden lg:block" />
          <div className="py-12 pt-10 lg:py-4 lg:px-12">
            {/* <h3 className="text-3xl lg:text-4xl">이력</h3> */}
            <h3 className="text-4xl lg:text-5xl tracking-widest">김예진</h3>
            <h5 className="text-2xl mt-3">픽스 애드 대표</h5>
            <p className="text-lg mt-8 text-gray-600 text-right">
              진심의 소통,
              <br />
              브랜드의 전략,
              <br />
              지속되는 신뢰
              {/* 2022 픽스 애드 설립 */}
              <br />
              {/* 2023 픽스 애드 대표 */}
              <br />
              {/* 2024 픽스 애드 대표 */}
              <br />
              {/* 2025 픽스 애드 대표 */}
              {/* {t(LS.history1, lang)} */}
              <br />
              {/* {t(LS.history2, lang)} */}
              <br />
              {/* {t(LS.history3, lang)} */}
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
            <h3 className="text-2xl lg:text-3xl font-bold">
              망가졌어도 괜찮아요,
              <br />
              믿고 맡겨주세요
            </h3>
            <div className="text-black text-xl mt-4">마케팅을 고쳐드리겠습니다.</div>
            <p className="text-base mt-4 text-gray-600">
              <br />
              안녕하세요. 픽스애드 대표 김예진입니다.
              <br />
              <br />
              처음엔 일개 사원으로 시작했습니다. 수많은 고객을 만나고, 그들의 브랜드를 함께 키워오며 저 역시 끊임없이
              배우고 성장해왔습니다.
              <br />
              <br />
              고객 한 분 한 분의 성과는 제게 단순한 성과가 아니라, 진심을 담은 마케팅의 가치를 다시금 깨닫게 해주는
              동력이었습니다. 그러한 경험들이 쌓여, 더 많은 분들과 진정성 있게 일하고 싶다는 마음으로 픽스애드를
              설립하게 되었습니다.
              <br />
              <br />
              SNS는 이제 언어와 문화를 넘어 브랜드를 ‘연결’하는 도구가 되었고, 디지털 광고는 단순 노출이 아닌 글로벌
              신뢰의 시작점이 되었습니다.
              <br />
              <br />
              픽스애드는 다른 곳에 없는 마케팅을 직접 개발하고 시장을 선도합니다. 고객 브랜드가 오래 살아남을 수 있도록
              지속 가능한 성장을 설계합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
