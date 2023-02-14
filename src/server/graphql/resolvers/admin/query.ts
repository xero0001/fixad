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
        accountType: arg({ type: 'ACCOUNT_TYPE' }),
        searchKeyword: stringArg(),
        skip: nonNull(intArg()),
        take: nonNull(intArg()),
      },
      resolve: async (_, { accountType, searchKeyword, skip, take }, ctx) => {
        const users = await prisma.preRegisteredUser.findMany({
          where: {
            isFinished: true,
            accountType: accountType ? accountType : undefined,
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

        // console.log({ users })

        return users
      },
    })

    t.field('adminPreRegisteredUsersCount', {
      type: 'Int',
      args: {
        accountType: arg({ type: 'ACCOUNT_TYPE' }),
        searchKeyword: stringArg(),
      },
      resolve: async (_, { accountType, searchKeyword }, ctx) => {
        const count = await prisma.preRegisteredUser.count({
          where: {
            isFinished: true,
            accountType: accountType ? accountType : undefined,
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

        // console.log({ count })

        return count
      },
    })
  },
})
