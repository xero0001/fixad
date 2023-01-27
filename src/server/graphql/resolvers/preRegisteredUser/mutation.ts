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
import { ApolloError } from 'apollo-server-micro'

export const PreRegisteredUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.string('testMutation', {
      args: {
        arg0: nonNull(stringArg()),
      },
      resolve: async (_, { arg0 }, ctx) => {
        return arg0
      },
    })
  },
})
