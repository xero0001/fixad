import { t } from '@root/src/shared/utils/getTranslation'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'

const LS = {
  creator: {
    ko: '크리에이터',
    ja: 'クリエイター',
    en: 'Creator',
  },
}

export default function Services({ lang }: { lang: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const creatorItems = [
    {
      title: '구글 지도',
      description: '구글 지도 광고 솔루션',
      src: '',
    },
    {
      title: '네이버 광고',
      description: '네이버 광고 솔루션',
      src: '',
    },
  ]

  return (
    <div id="services" className="py-32 mx-auto max-w-7xl px-5 xl:px-0">
      <div className="text-4xl font-bold tracking-tight sm:text-6xl text-center "
      style={{
        color: '#f47963',
        // background: 'linear-gradient(135deg, #f47963, #d12a75)',
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
      }}
      >SERVICES</div>
      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-2 gap-3 lg:gap-6 mx-auto">
          {creatorItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div className="bg-gray-100 aspect-[5/4] w-full relative">
                  <div className="absolute w-full h-full">
                    <img src={item.src} alt="ljs" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div
                  className="flex flex-col p-[12px] lg:p-6 w-full space-y-1 lg:space-y-3 absolute text-white"
                  style={{
                    transform: 'translateY(-100%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  }}>
                  <div className="flex items-end text-2xl lg:text-5xl space-x-2.5 lg:space-x-4 items-center">
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                    </div>
                    {/* <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 lg:w-[56px] lg:h-[56px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span> */}
                  </div>
                  <div className="text-base lg:text-2xl">{item.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
