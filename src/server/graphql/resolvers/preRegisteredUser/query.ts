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
    t.string('testQuery', {
      args: {
        arg0: nonNull(stringArg()),
      },
      resolve: async (_, { arg0 }, ctx) => {
        return arg0
      },
    })
  },
})
