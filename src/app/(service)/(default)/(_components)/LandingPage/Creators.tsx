import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa6'

const creatorItems = [
  {
    name: '뚜앙',
    instagram: 'https://www.instagram.com/hyang2._.2?igsh=eTZ2cHFpNnNnc2J2&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@chloe_9128_?_t=ZS-8tpB5iAIfTO&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/뚜앙/KakaoTalk_20250211_194256870_06.jpg',
  },
  {
    name: '루이비둉',
    instagram: 'https://www.instagram.com/lv_d_98?igsh=MXg5czBxZ29xMGtwMA==',
    tiktok: 'https://www.tiktok.com/@lv_d98?_t=ZS-8tpAuCzwkab&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/루이비둉/KakaoTalk_20250211_194154608_01.jpg',
  },
  {
    name: '베라',
    instagram: 'https://www.instagram.com/bera_piano?igsh=bTJ4ZHk0NjZtczVn&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@siho_1022?_t=ZS-8tpAtWhS0ZA&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/베라/KakaoTalk_20250211_193315529.jpg',
  },
  {
    name: '브링',
    tiktok: 'https://www.tiktok.com/@lmpnw0?_t=ZS-8tpAvbg8g5q&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/브링/KakaoTalk_20250212_100426030.jpg',
  },
  {
    name: '어푸어풔',
    tiktok: 'https://www.tiktok.com/@shs5473?_t=ZS-8tpB1L6mPZs&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/어푸어풔/KakaoTalk_20250212_152743171.jpg',
  },
  {
    name: '윤꼬',
    title: '크리에이터',
    src: '/assets/profiles/윤꼬/KakaoTalk_20250211_212916185_06.jpg',
  },
  {
    name: '차니',
    tiktok: 'https://www.tiktok.com/@_chan808?_t=ZS-8tpAsRDkEQ3&_r=1',
    title: '크리에이터',
    src: '/assets/profiles/차니/KakaoTalk_20250213_100319657.png',
  },
  {
    name: '란이',
    title: '크리에이터',
    src: '/assets/profiles/란이.jpg',
  },
  {
    name: '메이비',
    title: '크리에이터',
    src: '/assets/profiles/메이비.jpg',
  },
  {
    name: '제나',
    title: '크리에이터',
    src: '/assets/profiles/제나.jpg',
    instagram: 'https://www.instagram.com/likesomejenna?igsh=eWdvMGtlYjlmZHhy',
    tiktok: 'https://www.tiktok.com/@likesomejenna',
  },
  {
    name: '크룽이',
    title: '크리에이터',
    src: '/assets/profiles/크룽이.jpg',
  },
  {
    name: '태형',
    title: '크리에이터',
    src: '/assets/profiles/태형.jpg',
  },
  {
    name: '하즈',
    title: '크리에이터',
    src: '/assets/profiles/하즈.jpg',
  },
]

export default function Creators() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="creators" className="py-32 mx-auto max-w-7xl px-5 xl:px-0">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center ">CREATORS</div>
      <div className="mx-auto max-w-7xl mt-16">
        <div className="grid grid-cols-2 gap-3 lg:gap-6 mx-auto">
          {creatorItems.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div className="bg-gray-100 aspect-[3/4] w-full relative">
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
                      <span>{item.name}</span>
                    </div>
                    {item.instagram && (
                      <Link href={item.instagram} target="_blank">
                        <FaInstagram className="w-6 h-6 lg:w-[40px] lg:h-[40px]" />
                      </Link>
                    )}
                    {item.tiktok && (
                      <Link href={item.tiktok} target="_blank">
                        <FaTiktok className="w-6 h-6 lg:w-[40px] lg:h-[40px]" />
                      </Link>
                    )}
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
                  <div className="text-base lg:text-2xl">{item.title}</div>
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
