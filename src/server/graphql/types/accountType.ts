import { enumType } from 'nexus'

export const accountType = enumType({
  name: 'ACCOUNT_TYPE',
  members: ['EMAIL', 'KAKAO', 'GOOGLE', 'NAVER'],
})
