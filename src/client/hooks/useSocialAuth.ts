import { ACCOUNT_TYPE } from '@prisma/client'

export function useSocialAuth() {
  function snsLogin(snsType: ACCOUNT_TYPE) {
    switch (snsType) {
      case ACCOUNT_TYPE.NAVER:
        naverLogin()
        return
      case ACCOUNT_TYPE.KAKAO:
        kakaoLogin()
        return
      case ACCOUNT_TYPE.GOOGLE:
        googleLogin()
        return
      default:
        return
    }
  }

  async function kakaoLogin() {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI)

    console.log({ REST_API_KEY, REDIRECT_URI })

    // location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  }

  async function naverLogin() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI)

    location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=REQUESTING`
  }

  async function googleLogin() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI)

    location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`
  }

  return {
    snsLogin,
  }
}
