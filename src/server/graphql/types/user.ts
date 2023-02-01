import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.date('createdAt')
    t.date('updatedAt')
    t.string('email')
    t.string('name')

    t.boolean('isWithdrawn')
    // t.string('accountType')
    t.field('accountType', { type: 'ACCOUNT_TYPE' })
    t.string('role')

    t.field('profile', { type: 'Profile' })
    t.int('profileId')
  },
})
