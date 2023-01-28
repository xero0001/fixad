import { extendType, intArg, nonNull, stringArg } from 'nexus'
import { hash } from 'bcryptjs'
import prisma from '@server/prisma'
import { ApolloError } from 'apollo-server-micro'

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
        const existingUser = await prisma.preRegisteredUser.findUnique(
          {
            where: {
              email,
            },
          },
        )
        // email을 통해 가입한 이력이 있고 DB에 저장된 isFinished 값에 따라 front에서 분기를 해주는 방향
        // isFinished false -> name tel 입력 페이지로, true -> 이미 가입된 ID입니다 팝업
        if (existingUser) {
          existingUser.password = ''
          return existingUser
        }
        // isFinished를 따로 저장하지 않고 tel과 name이 존재하는지에 따라 isFinished를 반환하고 분기를 해주는 방향
        /*
        if(existingUser){
          existingUser.password = "";
          existingUser.isFinished = !!(existingUser.name && existingUser.tel);
          return existingUser;
        }
         */
        return prisma.preRegisteredUser.create({
          data: {
            email,
            password: hashedPassword,
          },
        })
      },
    })
    t.field('updateTelNamePreRegisteredUser', {
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
            throw new ApolloError('User not found', null, {
              extraCode: 'USER_NOT_FOUND',
            })
          }
          //when email of user found by id does not match with input email
          if (existingUser.email !== email) {
            throw new ApolloError('Email does not match', null, {
              extraCode: 'ID_EMAIL_MATCH_ERROR',
            })
          }
          //when user found by id is already updated own tel or name
          if (existingUser.isFinished || existingUser.tel !== '' || existingUser.name !== '') {
            throw new ApolloError('Tel & Name is exist', null, {
              extraCode: 'TEL_NAME_EXIST',
            })
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
      },
    )
  },
})
