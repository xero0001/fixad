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
    <div id="ceo" className="py-32 mx-auto max-w-7xl border-t-2 border-t-black">
      <div className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">CEO</div>
      <div className="mt-16 grid grid-template grid-cols-[2fr_2fr]">
        {/* CEO 사진 및 이름 */}
        <div className=" border-r-2 border-l-black border-r-black w-full">
          <div className="relative">
            {/* <div className="absolute px-12 text-white">
              <h2 className="text-5xl mt-4">가지왕</h2>
              <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
            </div> */}
            <div className="w-full bg-gray-100 w-96 h-96 aspect-video overflow-hidden">
              <img src="/alpha_ceo.webp" alt="ceo" loading="lazy" className="w-full object-cover" />
            </div>
          </div>
          <div className="h-[2px] bg-black mb-4" />
          <div className="py-4 px-12">
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
        </div>
        {/* 이력 및 회사이념 */}
        <div className="pl-12">
          {/* <div className="py-4">
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
          </div> */}
          <div className="py-4">
            <h3 className="text-4xl">가지왕</h3>
            <h5 className="text-2xl mt-3">빅지 엔터테인먼트 대표</h5>
          </div>
          <div className="h-[2px] bg-black my-4" />
          <div className="py-4">
            <h3 className="text-4xl">회사이념</h3>
            <p className="text-lg mt-2">
              여태까지 사회는 남성성을 죄악시 여기며 남성들이 생물학적으로 강한 희열을 느끼는 여러 사업들을 양지로
              들어내지 못하는 풍토를 만들어왔습니다. 이는 여성들이 몸매의 아름다움을 뽐내는 것부터, 혈투를 벌이며
              관객들의 아드레날린을 폭발시키는 격투기 시장에 이르기까지 다양하게 뿌리내려 있습니다.
              <br />
              <br />
              성적대상화, 폭력 조장이라는 이름하에 이런 사업들을 대중 문화 산업이라는 양지로 올라오지 못 하게 만들었기
              때문에 해당 사업에 종사하는 사람들이 체계적 관리를 받지 못하는 결과가 따라오는 것은 당연한 수순이었습니다.
              <br />
              <br />
              인간 본성에 가까운 쾌락을 유발시키는 사업들이기에 여러 위험이 도사리고 있을 수 밖에 없고, 체계적 관리를
              해줄 수 있는 건전한 엔터도 많지 않습니다. 이는 넘치는 끼와 재능을 가진 수많은 사람들이 이 사업에
              진출하는데 큰 걸림돌로 작용하고 있습니다. 이들에게 필요한건 체계적 관리와 안전, 즉 마음 놓고 끼를 발산할
              수 있는 든든한 울타리 같은 존재입니다.
              <br />
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
