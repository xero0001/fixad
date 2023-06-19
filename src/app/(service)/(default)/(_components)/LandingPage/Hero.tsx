import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import EmblaCarousel from './EmblaCarousel'

const OPTIONS = { loop: true }

const SLIDES = [
  {
    label: 'slide_1',
    src: '/assets/profiles/이진세/ljs_2.png',
  },
  {
    label: 'slide_2',
    src: '/assets/profiles/진다율/3.jpg',
  },
  {
    label: 'slide_3',
    src: '/assets/profiles/진다율/2.jpg',
  },
  {
    label: 'slide_4',
    src: '/assets/works/eternal_2-2.jpg',
  },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="hero" className="bg-gray-100 h-screen relative">
      {/* <div className="absolute top-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div
        className="absolute inset-x-1/2 inset-y-1/2 w-32 lg:w-48 h-auto"
        style={{
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}>
        <img
          src="/logo_white.png"
          alt="logo_center"
          style={{
            transform: 'translateY(-50%)',
          }}
        />
      </div>
    </div>
  )
}

// 취미로요리하는남자
