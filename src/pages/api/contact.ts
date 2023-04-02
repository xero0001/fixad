// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

type Data = {
  success: string
}

const MAIL = 'biggenterofficial@gmail.com'
const PASS = 'kbeoupckcmtiilea'

const transporter = nodemailer.createTransport({
  service: 'gmail', // 이메일
  auth: {
    user: MAIL, // 발송자 이메일
    pass: PASS, // 발송자 비밀번호
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, tel, company, message } = req.body

    const mailOptions = {
      from: email,
      to: MAIL,
      subject: `[문의] ${name} 님의 문의입니다. ${email} `,
      html: `
        <p>
          NAME: ${name}<br/>
          FROM: ${email}<br/>
          TEL: ${tel}<br/>
          COMPANY: ${company}<br/>
          <br/>
          내용:<br/>
          ${message}
        </p>
      `,
    }
    const info = await transporter.sendMail(mailOptions)

    res.status(200).json({ success: 'true' })
  }
  res.status(400)
}
