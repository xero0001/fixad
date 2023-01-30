import { extendType, intArg, nonNull, stringArg } from 'nexus'
import { hash } from 'bcryptjs'
import prisma from '@server/prisma'
import { ApolloError } from 'apollo-server-micro'
import { ACCOUNT_TYPE } from '@prisma/client'

export const PreRegisteredUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signupPreRegisteredUser', {
      type: 'PreRegisteredUser',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, { email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const existingUser = await prisma.preRegisteredUser.findUnique({
          where: {
            email,
          },
        })

        // email을 통해 가입한 이력이 있고 DB에 저장된 isFinished 값에 따라 front에서 분기를 해주는 방향
        // isFinished false -> name tel 입력 페이지로, true -> 이미 가입된 ID입니다 팝업
        if (existingUser?.isFinished) {
          throw new ApolloError('EXISTING_USER')
        }

        if (existingUser) {
          return prisma.preRegisteredUser.update({
            where: {
              email,
            },
            data: {
              password: hashedPassword,
              accountType: ACCOUNT_TYPE.EMAIL,
            },
          })
        }

        return prisma.preRegisteredUser.create({
          data: {
            email,
            password: hashedPassword,
            accountType: ACCOUNT_TYPE.EMAIL,
          },
        })
      },
    })

    t.field('finishSignupPreRegisteredUser', {
      type: 'PreRegisteredUser',
      args: {
        id: nonNull(intArg()),
        email: nonNull(stringArg()),
        tel: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve: async (_, { id, email, tel, name }, ctx) => {
        const existingUser = await prisma.preRegisteredUser.findUnique({
          where: {
            id,
          },
        })
        //when user by id not found
        if (!existingUser) {
          throw new ApolloError('USER_NOT_FOUND')
        }
        //when email of user found by id does not match with input email
        if (existingUser.email !== email) {
          throw new ApolloError('UNMATCHED_ID_AND_EMAIL')
        }
        //when user found by id is already updated own tel or name
        if (existingUser.isFinished) {
          throw new ApolloError('ALREADY_FINISHED')
        }

        const updatedUser = await prisma.preRegisteredUser.update({
          where: {
            id,
          },
          data: {
            tel,
            name,
            isFinished: true,
          },
        })
        return updatedUser
      },
    })
  },
})
