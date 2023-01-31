import qs from 'qs'
import axios from 'axios'
import prisma from '@server/prisma'
import { ACCOUNT_TYPE } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { code, state } = req.body

      const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
      const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
      const CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET

      const bodyData = {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
      }

      const response = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify(bodyData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })

      const { token_type, access_token, id_token, expires_in, refresh_token, refresh_token_expires_in, scope } =
        response.data

      const bodyData2 = {
        property_keys: ['kakao_acount.name', 'kakao_acount.email', 'kakao_acount.birthday'],
      }

      const response2 = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })

      const { kakao_account } = response2.data
      const { email } = kakao_account ?? {}

      const existingUser = await prisma.preRegisteredUser.findUnique({
        where: {
          email,
        },
      })

      let id = existingUser?.id

      // 이미 가입된 유저가 있다면
      if (existingUser) {
        if (existingUser?.isFinished) {
          throw new Error('DUPLICATED_EMAIL')
        }

        await prisma.preRegisteredUser.update({
          where: {
            email,
          },
          data: {
            password: '',
            accountType: ACCOUNT_TYPE.KAKAO,
          },
        })
      } else {
        const user = await prisma.preRegisteredUser.create({
          data: {
            email,
            password: '',
            accountType: ACCOUNT_TYPE.KAKAO,
          },
        })

        id = user.id
      }

      res.status(200).json({
        id,
        email,
        accountType: ACCOUNT_TYPE.KAKAO,
      })
      return
    } catch (e) {
      console.log(e)
      if (e.message !== 'DUPLICATED_EMAIL') {
        res.status(500).send({ message: 'INTERNAL_SERVER_ERROR' })
        return
      }

      res.status(500).send({ message: e.message })
      return
    }
  } else {
    // Handle any other HTTP method
  }
}
