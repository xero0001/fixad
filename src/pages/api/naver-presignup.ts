import qs from 'qs'
import axios from 'axios'
import prisma from '@server/prisma'
import { ACCOUNT_TYPE } from '@prisma/client'
import { PATH } from '@shared/const'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = req.query
      const { code, state } = query

      const REDIRECT_URI = encodeURIComponent(process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI)
      const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
      const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET

      const response = await axios.get(
        `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&code=${code}&state=${state}`,
        {
          headers: {
            'X-Naver-Client-Id': CLIENT_ID,
            'X-Naver-Client-Secret': CLIENT_SECRET,
          },
        },
      )

      const { access_token, refresh_token, token_type, expires_in } = response.data

      const response2 = await axios.get(`https://openapi.naver.com/v1/nid/me`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })

      const { email } = response2.data.response

      const existingUser = await prisma.preRegisteredUser.findUnique({
        where: {
          email,
        },
      })

      let id = existingUser?.id

      // 이미 가입된 유저가 있다면
      if (existingUser) {
        if (existingUser?.isFinished) {
          res.redirect(`${PATH.AUTH_PRESIGNUP}?error=EXISTING_USER`)
        }

        await prisma.preRegisteredUser.update({
          where: {
            email,
          },
          data: {
            password: '',
            accountType: ACCOUNT_TYPE.NAVER,
          },
        })
      } else {
        const user = await prisma.preRegisteredUser.create({
          data: {
            email,
            password: '',
            accountType: ACCOUNT_TYPE.NAVER,
          },
        })

        id = user.id
      }

      res.redirect(`${PATH.AUTH_PRESIGNUP_EXTRA}?id=${id}&email=${email}&accountType=${ACCOUNT_TYPE.NAVER}`)
      return
    } catch (e) {
      console.log(e)
      res.redirect(`${PATH.AUTH_PRESIGNUP_EXTRA}?error=INTERNAL_SERVER_ERROR`)
    }
  } else {
    // Handle any other HTTP method
  }
}
