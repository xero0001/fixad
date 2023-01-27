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

export const PreRegisteredUserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('testQuery', {
      type: 'PreRegisteredUser',
      args: {
        id: nonNull(intArg()),
      },
      resolve: async (_, { id }, ctx) => {
        return prisma.preRegisteredUser.findUnique({
          where: {
            id,
          },
        })
      },
    })
  },
})
