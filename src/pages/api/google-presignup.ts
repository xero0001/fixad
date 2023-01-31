import qs from 'qs'
import axios from 'axios'
import prisma from '@server/prisma'
import { ACCOUNT_TYPE } from '@prisma/client'
import { PATH } from '@shared/const'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { code, scope, authuser, prompt } = req.body

      const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
      const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

      const url = `https://oauth2.googleapis.com/token?code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`

      const access_token = await axios
        .post(url, {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then(el => {
          return el.data.access_token
        })

      const googleAPI = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`
      const userInfo = await axios
        .get(googleAPI, {
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        })
        .then(el => {
          return el.data
        })

      const email = userInfo.email

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
            accountType: ACCOUNT_TYPE.GOOGLE,
          },
        })
      } else {
        const user = await prisma.preRegisteredUser.create({
          data: {
            email,
            password: '',
            accountType: ACCOUNT_TYPE.GOOGLE,
          },
        })

        id = user.id
      }

      res.status(200).json({
        id,
        email,
        accountType: ACCOUNT_TYPE.GOOGLE,
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
