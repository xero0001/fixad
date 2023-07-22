import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SiOnlyfans } from 'react-icons/si'
import { SlSocialInstagram, SlSocialYoutube } from 'react-icons/sl'
import { SiLinktree } from 'react-icons/si'
import { RxInstagramLogo } from 'react-icons/rx'
import { Dialog } from '@headlessui/react'

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
  const [selectedWork, setSelectedWork] = useState(null)

  return (
    <div id="works" className="py-32 border-t-2 border-t-black max-w-7xl mx-5 xl:px-0 xl:mx-auto">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">WORKS</div>
      <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-16">
        {workItems.map((item, index) => {
          return (
            <div className="bg-gray-100 aspect-[1/1] cursor-pointer" key={index}>
              <img
                src={item.src}
                alt={item.label}
                className="object-cover w-full h-full"
                onClick={() => {
                  setSelectedWork(item.src)
                }}
              />
            </div>
          )
        })}
      </div>

      {!!selectedWork && (
        <div className="fixed w-full h-full top-0 left-0 z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={() => setSelectedWork(null)} />
          <div
            className="mx-auto max-w-sm rounded px-2 z-[100] relative top-1/2"
            style={{
              transform: 'translateY(-50%)',
            }}>
            <img src={selectedWork} alt="" className="w-full" />
          </div>
        </div>
      )}
      {/* <Dialog open={!!selectedWork} onClose={() => setSelectedWork(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={() => setSelectedWork(null)} />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <img src={selectedWork} alt="" className="w-full" />
          </Dialog.Panel>
        </div>
      </Dialog> */}
    </div>
  )
}

// 취미로요리하는남자
