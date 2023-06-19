import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SiOnlyfans } from 'react-icons/si'
import { SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl'
import { SiLinktree } from 'react-icons/si'
import { RxInstagramLogo } from 'react-icons/rx'

const workItems = [
  {
    label: '',
    src: '/assets/works/eternal_1-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/eternal_1-2.jpg',
  },
  {
    label: '',
    src: '/assets/works/eternal_3-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/eternal_3-3.jpg',
  },
  {
    label: '',
    src: '/assets/works/bruno_1-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/bruno_2-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/bruno_3-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/roma_1-1.jpg',
  },
  {
    label: '',
    src: '/assets/works/roma_2-1.jpg',
  },
  // {
  //   label: '',
  //   src: '/assets/works/eternal_1-1.jpg',
  // },
  // {
  //   label: '',
  //   src: '/assets/works/eternal_1-1.jpg',
  // },
  // {
  //   label: '',
  //   src: '/assets/works/eternal_1-1.jpg',
  // },
]

export default function Works() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="works" className="py-32 border-t-2 border-t-black  mx-auto max-w-7xl px-5 xl:px-0">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">WORKS</div>
      <div className="grid grid-cols-3 gap-4 mt-16">
        {workItems.map((item, index) => {
          return (
            <div className="bg-gray-100 aspect-[1/1]" key={index}>
              <img src={item.src} alt={item.label} className="object-cover w-full h-full" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

// 취미로요리하는남자
