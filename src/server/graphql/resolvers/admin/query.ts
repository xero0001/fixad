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

export const AdminQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('adminPreRegisteredUsers', {
      type: 'PreRegisteredUser',
      args: {
        searchKeyword: stringArg(),
        skip: nonNull(intArg()),
        take: nonNull(intArg()),
      },
      resolve: async (_, { searchKeyword, skip, take }, ctx) => {
        return prisma.preRegisteredUser.findMany({
          where: {
            isFinished: true,
            OR: searchKeyword
              ? [
                  {
                    name: {
                      contains: searchKeyword,
                    },
                  },
                  {
                    tel: {
                      contains: searchKeyword,
                    },
                  },
                  {
                    email: {
                      contains: searchKeyword,
                    },
                  },
                ]
              : undefined,
          },
          take,
          skip,
          orderBy: {
            createdAt: 'desc',
          },
        })
      },
    })

    t.field('adminPreRegisteredUsersCount', {
      type: 'Int',
      args: {
        searchKeyword: stringArg(),
      },
      resolve: async (_, { searchKeyword }, ctx) => {
        return prisma.preRegisteredUser.count({
          where: {
            isFinished: true,
            OR: searchKeyword
              ? [
                  {
                    name: {
                      contains: searchKeyword,
                    },
                  },
                  {
                    tel: {
                      contains: searchKeyword,
                    },
                  },
                  {
                    email: {
                      contains: searchKeyword,
                    },
                  },
                ]
              : undefined,
          },
        })
      },
    })
  },
})
