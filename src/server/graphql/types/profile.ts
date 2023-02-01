import { objectType } from 'nexus'

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.int('id')
    t.string('tel')
    t.string('zipCode')
    t.string('address')
    t.string('extraAddress')
    t.json('misc')
    t.string('gender')

    t.field('user', { type: 'User' })
    t.int('userId')
  },
})
