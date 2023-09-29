import { useState } from 'react'

const creatorItems = [
  {
    name: '이진세',
    href: 'https://www.instagram.com/jinselee_/?igshid=YmMyMTA2M2Y%3D',
    title: 'MMA 파이터',
    src: '/assets/profiles/이진세/ljs_1.png',
  },
  { name: '진다율', href: 'https://linktr.ee/jindayul', title: '모델', src: '/assets/profiles/진다율/1.jpg' },
  { name: '승우', href: 'https://linktr.ee/kngsngwoo', title: '모델', src: '/assets/profiles/강승우/1.jpg' },
  { name: '세아', href: 'https://linktr.ee/jinsea', title: '모델', src: '/assets/profiles/세아/1.jpg' },
  { name: '지유', href: 'https://linktr.ee/Jiyoo_', title: '모델', src: '/assets/profiles/지유/1.jpg' },
  { name: '지애', href: 'https://linktr.ee/jiaeji', title: '모델', src: '/assets/profiles/지애/1.jpg' },
  { name: '주아', href: 'https://linktr.ee/seojua', title: '모델', src: '/assets/profiles/주아/1.jpg' },
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
              <a key={index} className="relative" href={item.href} target="_blank">
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
                  <div className="flex items-end text-2xl lg:text-5xl space-x-4 lg:space-x-6">
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                    </div>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 lg:w-[56px] lg:h-[56px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-base lg:text-2xl">{item.title}</div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// 취미로요리하는남자
