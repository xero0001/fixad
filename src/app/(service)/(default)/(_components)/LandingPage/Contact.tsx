'use client'

import { useState } from 'react'
import axios from 'axios'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const initState = { name: '', email: '', tel: '', company: '', message: '' }

export default function Contact({ lang }: { lang: string }) {
  const [formState, setFormState] = useState({
    ...initState,
  })

  async function onSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/contact', {
        ...formState,
      })
      .then(res => {
        if (res.data.success === 'true') {
          alert('문의를 성공적으로 전달하였습니다.')
          setFormState({
            ...initState,
          })
        } else {
          alert('문의에 실패하였습니다.')
        }
      })
      .catch(() => {
        alert('문의에 실패하였습니다.')
      })
  }

  function handleInputChange(e) {
    e.preventDefault()

    const { name, value } = e.target

    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div id="contact" className="py-32 mx-5 max-w-7xl border-t-2 border-t-black xl:mx-auto">
      {/* <div id="contact" className="relative isolate bg-white py-24 px-6 sm:py-32 lg:px-8 "> */}
      {/* <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg> */}
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">CONTACT</div>
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        {/* <p className="mt-2 text-lg leading-8 text-gray-600">
          We help companies and individuals build out their brand guidelines.
        </p> */}
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-black">
                  이름<sup>*</sup>
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full border-0 py-2 px-3.5 text-black shadow-sm ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                    required
                    onChange={handleInputChange}
                    value={formState.name}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
                  이메일 주소<sup>*</sup>
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full border-0 py-2 px-3.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                    required
                    onChange={handleInputChange}
                    value={formState.email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-semibold leading-6 text-black">
                  휴대폰 번호
                </label>
                <div className="mt-2.5">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    className="block w-full border-0 py-2 px-3.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    value={formState.tel}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-black">
                  회사
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block w-full border-0 py-2 px-3.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    value={formState.company}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-black">
                  문의 내용<sup>*</sup>
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full border-0 py-2 px-3.5 text-black shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                    required
                    onChange={handleInputChange}
                    value={formState.message}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                onChange={handleInputChange}
                value={formState.message}>
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
