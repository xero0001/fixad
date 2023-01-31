'use client'

import { useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { PATH } from '@shared/const'

export default function Kakao() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  async function goRedirectUrl() {
    const response = await axios
      .post('/api/kakao-presignup', {
        code,
        state,
      })
      .catch(e => {
        const message = e?.response?.data?.message
        router.push(`${PATH.AUTH_PRESIGNUP_EXTRA}?error=${message}`)
      })
    const { id, email, accountType } = (response as any)?.data
    router.push(`${PATH.AUTH_PRESIGNUP_EXTRA}?id=${id}&email=${email}&accountType=${accountType}`)
  }

  useEffect(() => {
    if (!code && !state) return
    goRedirectUrl()
  }, [code, state])

  useEffect(() => {
    if (error || errorDescription) {
      router.push(`${PATH.AUTH_PRESIGNUP_EXTRA}?error=INTERNAL_SERVER_ERROR`)
    }
  }, [error, errorDescription])

  return <div>인증중...</div>
}
