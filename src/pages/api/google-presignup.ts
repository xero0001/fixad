import qs from 'qs'
import axios from 'axios'
import prisma from '@server/prisma'
import { ACCOUNT_TYPE } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
    } catch (e) {
      console.log(e)
    }
  } else {
    // Handle any other HTTP method
  }
}
