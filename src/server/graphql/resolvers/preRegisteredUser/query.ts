import {
  asNexusMethod,
  makeSchema,
  nonNull,
  nullable,
  objectType,
  extendType,
  list,
  stringArg,
  intArg,
  booleanArg,
  arg,
} from 'nexus'
import { compare, hash } from 'bcryptjs'
import { generateToken } from '@server/apollo/utils'
import prisma from '@server/prisma'
import { ACCOUNT_TYPE } from '@prisma/client'
import { ApolloError } from 'apollo-server-micro'

export const PreRegisteredUserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('validatePreSignupUser', {
      type: 'Boolean',
      args: {
        id: nonNull(intArg()),
        email: nonNull(stringArg()),
        accountType: nonNull(arg({ type: 'ACCOUNT_TYPE' })),
      },
      resolve: async (_, { id, email, accountType }, ctx) => {
        const user = await prisma.preRegisteredUser.findUnique({
          where: {
            id,
          },
        })
        if (!user) {
          throw new ApolloError('USER_NOT_FOUND')
        }

        return user.email === email && user.accountType === accountType && !user.isFinished
      },
    })
  },
})
