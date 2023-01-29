export function useSocialAuth() {
  function snsLogin(snsType: 'kakao' | 'naver' | 'google') {
    switch (snsType) {
      case 'naver':
        naverLogin()
        return
      case 'kakao':
        kakaoLogin()
        return
      case 'google':
        googleLogin()
        return
      default:
        return
    }
  }

  async function kakaoLogin() {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI)

    location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  }

  async function naverLogin() {
    const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
    const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI)

    location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=REQUESTING`
  }

  async function googleLogin() {}

  return {
    snsLogin,
  }
}
