import { objectType } from 'nexus'

export const PreRegisteredUser = objectType({
  name: 'PreRegisteredUser',
  definition(t) {
    t.int('id')
    t.string('email')
    t.date('createdAt')
    t.date('updatedAt')

    t.string('name')
    t.string('tel')
    t.boolean('isFinished')
    t.string('accountType')
  },
})
