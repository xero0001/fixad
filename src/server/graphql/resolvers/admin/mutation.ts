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

export const AdminMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('testMutation', {
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